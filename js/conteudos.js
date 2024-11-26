// JavaScript para interatividade, como filtrar conteúdos por tipo (Texto, Vídeo, Podcast)
document.addEventListener("DOMContentLoaded", function() {
    const filtroTipo = document.getElementById('filtroTipo');
    const conteudoItems = document.querySelectorAll('.conteudo-item');

    // Função para filtrar conteúdos
    filtroTipo.addEventListener('change', function() {
        const tipoSelecionado = filtroTipo.value.toLowerCase();
        conteudoItems.forEach(item => {
            const tipoConteudo = item.querySelector('p').textContent.toLowerCase();
            if (tipoSelecionado === 'todos' || tipoConteudo.includes(tipoSelecionado)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
