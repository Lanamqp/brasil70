// login.js
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha })
    });

    if (response.ok) {
        const data = await response.json();
        alert('Login bem-sucedido');
        localStorage.setItem('token', data.token);  // Armazenando o token no localStorage
        window.location.href = '/quiz.html';  // Redirecionar para a página do quiz
    } else {
        alert('Erro ao fazer login');
    }
});
