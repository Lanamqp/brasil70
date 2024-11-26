// Função de cadastro
document.getElementById('cadastro-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Coletar dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Criar um objeto de usuário
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        foto: 'assets/usuario.jpg',  // Foto padrão
    };

    // Salvar no localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redirecionar para a página de perfil
    window.location.href = 'perfil.html';
});
