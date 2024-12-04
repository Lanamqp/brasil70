// quiz.js
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('É necessário realizar o login para responder ao quiz');
        window.location.href = '/login.html';  // Redireciona para a página de login
        return;
    }

    // Aqui você pode adicionar o código para carregar o quiz do servidor
    // Por exemplo, uma requisição fetch para carregar as perguntas
    // Exemplo de como poderia ser a estrutura do quiz:

    const quizQuestions = [
        { question: 'Qual a capital do Brasil?', options: ['Brasília', 'São Paulo', 'Rio de Janeiro'], correct: 0 },
        { question: 'Quem é o presidente do Brasil em 2024?', options: ['Lula', 'Bolsonaro', 'Dilma'], correct: 0 },
        // Adicione mais perguntas conforme necessário
    ];

    const quizContainer = document.getElementById('quiz');
    
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${q.question}</p>
            <ul>
                ${q.options.map((opt, i) => `<li><input type="radio" name="question${index}" value="${i}">${opt}</li>`).join('')}
            </ul>
        `;
        quizContainer.appendChild(questionDiv);
    });

    document.getElementById('submitQuiz').addEventListener('click', () => {
        const answers = [];
        quizQuestions.forEach((q, index) => {
            const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedAnswer) {
                answers.push(parseInt(selectedAnswer.value));
            } else {
                answers.push(null);
            }
        });

        // Enviar as respostas para o servidor ou processar os resultados aqui
        console.log('Respostas:', answers);
    });
});

// Middleware para verificar se o usuário está autenticado
function verificarToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).send('Token não encontrado');
    }

    jwt.verify(token, 'secreta_chave', (err, decoded) => {
        if (err) {
            return res.status(401).send('Token inválido');
        }

        req.userId = decoded.userId;  // Armazena o ID do usuário no request para acesso posterior
        next();
    });
}
