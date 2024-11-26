// Função para adicionar o feedback na lista de comentários
function adicionarComentario(comentarioTexto) {
    const comentariosLista = document.getElementById("comentarios-lista");
    
    // Cria a estrutura de um novo comentário
    const comentario = document.createElement("div");
    comentario.classList.add("comentario");

    // Adiciona o texto do comentário
    const comentarioTexto = document.createElement("p");
    comentarioTexto.innerText = comentarioTexto;
    comentario.appendChild(comentarioTexto);

    // Cria o botão de excluir
    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "Excluir";
    botaoExcluir.onclick = function() {
        comentario.remove(); // Exclui o comentário
    };
    comentario.appendChild(botaoExcluir);

    // Adiciona o comentário na lista
    comentariosLista.appendChild(comentario);
}

// Função para tratar o envio do feedback
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const comentarioTexto = document.getElementById("comentario").value;
    if (comentarioTexto.trim() === "") {
        alert("Por favor, escreva um comentário antes de enviar.");
        return;
    }

    // Adiciona o comentário na lista
    adicionarComentario(comentarioTexto);

    // Limpa o campo de comentário após o envio
    document.getElementById("comentario").value = "";
});
