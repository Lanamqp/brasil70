// cadastro.js
document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha })
    });

    if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        window.location.href = '/login.html';  // Redirecionar para a página de login
    } else {
        alert('Erro ao cadastrar');
    }
});
