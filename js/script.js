// Função para registrar um novo usuário
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("emailCadastro").value;
    const senha = document.getElementById("senhaCadastro").value;
    const tipoUsuario = document.getElementById("tipoUsuario").value;

    // Simulando a criação de um usuário no banco de dados (pode ser substituído por uma API real)
    console.log("Novo usuário cadastrado:", nome, email, tipoUsuario);

    alert("Cadastro realizado com sucesso!");
});

// Função de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Simulando login (pode ser substituído por autenticação real)
    console.log("Tentando login com:", email);

    alert("Login realizado com sucesso!");
});

// Função para exibir conteúdos (simulação)
const conteudos = [
    { titulo: "O Milagre Econômico", descricao: "Crescimento econômico e seus impactos", tipo: "Texto", url: "https://example.com" },
    { titulo: "A Ditadura Militar", descricao: "Anos de repressão e censura", tipo: "Vídeo", url: "https://example.com/video" },
    { titulo: "Música nos Anos 70", descricao: "A música popular brasileira", tipo: "Podcast", url: "https://example.com/podcast" }
];

function exibirConteudos() {
    const conteudoLista = document.getElementById("conteudoLista");
    conteudos.forEach(conteudo => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${conteudo.titulo}</h3><p>${conteudo.descricao}</p><a href="${conteudo.url}">Saiba mais</a>`;
        conteudoLista.appendChild(div);
    });
}

exibirConteudos();

// Função para enviar feedback
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const mensagem = document.getElementById("mensagem").value;
    const nota = document.getElementById("nota").value;

    // Simulando o envio de feedback
    console.log("Feedback recebido:", mensagem, nota);

    alert("Feedback enviado com sucesso!");
});

// Script para o carrossel de imagens
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    
    const offset = -currentIndex * 100;
    document.querySelector('.carrossel-container').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

// Trocar imagem automaticamente a cada 3 segundos
setInterval(nextSlide, 3000);

// Exibir o primeiro slide
showSlide(currentIndex);

// Função de Pesquisa
function searchContent() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const conteudos = document.querySelectorAll('.conteudo');

    conteudos.forEach(conteudo => {
        const title = conteudo.getAttribute('data-title').toLowerCase();
        if (title.includes(searchQuery)) {
            conteudo.style.display = "block";
        } else {
            conteudo.style.display = "none";
        }
    });
}

// Função para mostrar mais conteúdos
function loadMoreContent() {
    const hiddenContents = document.querySelectorAll('#conteudos .conteudo:nth-child(n+7)');
    hiddenContents.forEach(content => {
        content.style.display = 'block';
    });

    // Esconde o botão "Veja Mais" após revelar os conteúdos
    document.getElementById('veja-mais-btn').style.display = 'none';
}

// Função de pesquisa
function searchContent() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const contents = document.querySelectorAll('.conteudo');

    contents.forEach(content => {
        const title = content.getAttribute('data-title').toLowerCase();
        if (title.includes(searchTerm)) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
}

// Função para alternar o conteúdo "Leia Mais" dos artigos
function toggleConteudo(id) {
    var conteudo = document.getElementById('conteudo-' + id);
    if (conteudo.style.display === 'none' || conteudo.style.display === '') {
        conteudo.style.display = 'block';
    } else {
        conteudo.style.display = 'none';
    }
}





