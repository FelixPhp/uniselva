// Array com os links dos vídeos do YouTube
const videos = [
    'https://www.youtube.com/embed/FtEVgwwGwDs',  // Vídeo 1
    'https://www.youtube.com/embed/VIDEO_ID_2',   // Vídeo 2
    'https://www.youtube.com/embed/VIDEO_ID_3'    // Vídeo 3
];

let currentVideoIndex = 0; // Índice do vídeo atual

// Função para carregar o próximo vídeo no iframe
function loadNextVideo() {
    currentVideoIndex++;

    // Verifica se há mais vídeos no array
    if (currentVideoIndex < videos.length) {
        const iframe = document.getElementById('youtube-player');
        iframe.src = videos[currentVideoIndex];  // Carrega o próximo vídeo no iframe
        document.getElementById('confirm-button').disabled = true; // Desabilita o botão de confirmação para o próximo vídeo
    } else {
        alert('Você completou todos os vídeos!');
    }
}

// Função para monitorar o progresso do vídeo (utilizando a API do YouTube seria ideal)
document.getElementById('youtube-player').onload = function() {
    const iframe = document.getElementById('youtube-player');
    
    // Quando o vídeo termina, habilita o botão de confirmação
    iframe.contentWindow.onended = function() {
        document.getElementById('confirm-button').disabled = false;
    };
};

// Função para confirmar que o vídeo foi assistido
document.getElementById('confirm-button').onclick = function() {
    document.getElementById('next-video-button').disabled = false; // Habilita o botão "Próximo Vídeo"
};
