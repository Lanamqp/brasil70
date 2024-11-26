// Carregar os dados do usuário
document.addEventListener('DOMContentLoaded', function() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        // Exibir os dados do usuário
        document.getElementById('nome-usuario').textContent = usuario.nome;
        document.getElementById('email-usuario').textContent = usuario.email;
        document.getElementById('foto-usuario').src = usuario.foto;

        // Função para editar o perfil
        document.getElementById('editar-form').addEventListener('submit', function(e) {
            e.preventDefault();

            // Obter os novos dados
            const novoNome = document.getElementById('nome').value;
            const novoEmail = document.getElementById('email').value;
            const novaFoto = document.getElementById('foto').files[0];

            // Criar um novo objeto de usuário com as alterações
            const novoUsuario = {
                nome: novoNome || usuario.nome,
                email: novoEmail || usuario.email,
                senha: usuario.senha,  // Não alteramos a senha
                foto: novaFoto ? URL.createObjectURL(novaFoto) : usuario.foto,  // Nova foto
            };

            // Salvar os dados atualizados no localStorage
            localStorage.setItem('usuario', JSON.stringify(novoUsuario));

            // Atualizar os dados na tela
            document.getElementById('nome-usuario').textContent = novoUsuario.nome;
            document.getElementById('email-usuario').textContent = novoUsuario.email;
            document.getElementById('foto-usuario').src = novoUsuario.foto;

            // Feedback de sucesso
            alert('Perfil atualizado com sucesso!');
        });
    } else {
        // Redireciona para o login se não encontrar usuário
        window.location.href = 'login.html';
    }
});
