// Função de login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Coletar dados do formulário
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verificar se os dados estão no localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    // Verificar se o login é válido
    if (usuario && usuario.email === email && usuario.senha === senha) {
        // Redirecionar para a página de perfil
        window.location.href = 'perfil.html';
    } else {
        alert('Usuário ou senha inválidos.');
    }
});
