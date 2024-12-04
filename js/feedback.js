document.getElementById('feedbackForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;

    try {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, comentario })
        });

        if (response.ok) {
            alert('Feedback enviado com sucesso!');
            document.getElementById('feedbackForm').reset();  // Limpa os campos do formulário
        } else {
            alert('Erro ao enviar o feedback.');
        }
    } catch (error) {
        alert('Erro ao enviar o feedback: ' + error.message);
    }
});
