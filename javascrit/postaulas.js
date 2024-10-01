// Função para adicionar um novo link de vídeo
function adicionarAula() {
    const youtubeUrl = document.getElementById('youtube-url').value;
    
    if (youtubeUrl) {
        const videoId = extrairIdVideo(youtubeUrl);

        if (videoId) {
            const aulasContainer = document.getElementById('aulas-container');
            
            // Cria um novo item de aula com o vídeo
            const aulaItem = document.createElement('div');
            aulaItem.classList.add('aula-item');
            
            aulaItem.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
            `;

            aulasContainer.appendChild(aulaItem);

            // Limpa o campo de input
            document.getElementById('youtube-url').value = '';
        } else {
            alert('URL do YouTube inválido.');
        }
    } else {
        alert('Por favor, insira um URL.');
    }
}

// Função para extrair o ID do vídeo do YouTube de uma URL
function extrairIdVideo(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\s]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
