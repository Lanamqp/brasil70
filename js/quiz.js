let perguntaAtual = 0;
let pontos = 0; // Pontuação do usuário

// Lista de perguntas, alternativas e explicações
const perguntas = [
    {
        pergunta: "Qual foi o nome do presidente do Brasil durante o início dos anos 70?",
        alternativas: {
            A: "Emílio Garrastazu Médici",
            B: "Juscelino Kubitschek",
            C: "João Goulart",
            D: "Tancredo Neves"
        },
        respostaCorreta: "A",
        explicacao: "Emílio Garrastazu Médici foi o presidente do Brasil entre 1969 e 1974, durante o período do regime militar."
    },
    {
        pergunta: "Qual movimento cultural foi muito influente no Brasil durante os anos 70?",
        alternativas: {
            A: "Tropicalismo",
            B: "Bossa Nova",
            C: "Modernismo",
            D: "Romantismo"
        },
        respostaCorreta: "A",
        explicacao: "O Tropicalismo foi um movimento cultural de vanguarda que misturou elementos da música popular brasileira com a cultura internacional."
    },
    {
        pergunta: "Quem foi o responsável pela introdução do AI-5 (Ato Institucional nº 5) em 1968?",
        alternativas: {
            A: "Emílio Garrastazu Médici",
            B: "Costa e Silva",
            C: "Juscelino Kubitschek",
            D: "Tancredo Neves"
        },
        respostaCorreta: "B",
        explicacao: "O AI-5 foi implementado pelo presidente Costa e Silva, em 1968, e marcou um período de maior repressão durante o regime militar."
    }
    // Mais perguntas podem ser adicionadas aqui
];

// Função para carregar a próxima pergunta
function carregarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText = pergunta.pergunta;

    // Atualiza as alternativas
    for (let alternativa in pergunta.alternativas) {
        document.getElementById(`alternativa-${alternativa.toLowerCase()}`).nextElementSibling.innerText = pergunta.alternativas[alternativa];
    }

    // Limpa a seleção de resposta
    const radios = document.querySelectorAll('input[name="resposta"]');
    radios.forEach(radio => radio.checked = false);

    // Oculta o resultado
    document.getElementById("resultado").style.display = "none";
}

// Função para verificar a resposta
document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
    if (!respostaSelecionada) {
        alert("Por favor, selecione uma resposta.");
        return;
    }

    const resposta = respostaSelecionada.value;
    const pergunta = perguntas[perguntaAtual];
    const resultadoMensagem = document.getElementById("mensagem-resultado");
    const explicacao = document.getElementById("explicacao");

    // Verifica se a resposta está correta
    if (resposta === pergunta.respostaCorreta) {
        pontos++;
        resultadoMensagem.innerText = "Você acertou!";
        resultadoMensagem.style.color = "#2e7d32"; // verde
    } else {
        resultadoMensagem.innerText = "Você errou!";
        resultadoMensagem.style.color = "#d32f2f"; // vermelho
    }

    explicacao.innerText = pergunta.explicacao;
    document.getElementById("resultado").style.display = "block";
});

// Função para passar para a próxima pergunta
function nextQuestion() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        alert(`Fim do quiz! Você acertou ${pontos} de ${perguntas.length} perguntas.`);
    }
}

carregarPergunta(); // Carrega a primeira pergunta ao iniciar

function submitQuiz() {
    // Respostas corretas
    const correctAnswers = {
        q1: 'b',  // Emílio Médici
        q2: 'd',  // A greve dos metalúrgicos
        q3: 'a',  // Caetano Veloso
        q4: 'b',  // Uma rápida industrialização e crescimento econômico
        q5: 'b',  // 1970
    };

    let score = 0;
    let resultText = '<h3>Resultado:</h3><ul>';

    // Verificando as respostas
    for (let i = 1; i <= 5; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer) {
            const answerValue = userAnswer.value;
            if (answerValue === correctAnswers[`q${i}`]) {
                score++;
                resultText += `<li><strong>Pergunta ${i}: Correta!</strong></li>`;
            } else {
                resultText += `<li><strong>Pergunta ${i}: Errada!</strong></li>`;
            }
        } else {
            resultText += `<li><strong>Pergunta ${i}: Não respondida!</strong></li>`;
        }
    }

    // Exibir o resultado
    resultText += `</ul><p>Você acertou ${score} de 5.</p>`;

    // Adicionando explicações
    resultText += `
        <h4>Explicações:</h4>
        <ul>
            <li><strong>Q1:</strong> O presidente durante o Milagre Econômico foi Emílio Médici.</li>
            <li><strong>Q2:</strong> A resistência política se manifestou com a greve dos metalúrgicos.</li>
            <li><strong>Q3:</strong> Caetano Veloso foi um dos grandes ícones musicais dos anos 70.</li>
            <li><strong>Q4:</strong> O Milagre Econômico foi uma fase de crescimento econômico rápido no Brasil.</li>
            <li><strong>Q5:</strong> A Copa do Mundo de 1970 foi uma das mais memoráveis, vencida pelo Brasil.</li>
        </ul>
    `;

    // Exibir o feedback
    document.getElementById('quiz-result').innerHTML = resultText;
}

// Função para alternar a exibição dos quizzes
function toggleQuiz(quizId) {
    const quiz = document.getElementById(quizId);
    quiz.style.display = (quiz.style.display === "block") ? "none" : "block";
}

// Função para verificar as respostas e exibir o resultado
function submitQuiz(quizNumber) {
    let correctAnswer = '';
    let userAnswer = '';
    let resultElement = document.getElementById(`result${quizNumber}`);
    let formElement = document.getElementById(`quiz-form-${quizNumber}`);

    // Definir a resposta correta com base no quiz
    if (quizNumber === 1) {
        correctAnswer = 'b'; // Resposta correta para o Quiz 1
    } else if (quizNumber === 2) {
        correctAnswer = 'a'; // Resposta correta para o Quiz 2
    }

    // Obter a resposta selecionada pelo usuário
    const formData = new FormData(formElement);
    for (const [key, value] of formData.entries()) {
        userAnswer = value;
    }

    // Verificar se a resposta está correta
    if (userAnswer === correctAnswer) {
        resultElement.innerHTML = `<p>Resposta correta! Você acertou!</p>`;
        resultElement.style.backgroundColor = '#81c784'; // Cor de fundo verde
    } else {
        resultElement.innerHTML = `<p>Resposta errada! A resposta correta era: ${correctAnswer}</p>`;
        resultElement.style.backgroundColor = '#e57373'; // Cor de fundo vermelha
    }
}
