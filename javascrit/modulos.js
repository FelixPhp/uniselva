const videos = [
    'https://www.youtube.com/embed/FtEVgwwGwDs',  // Vídeo 1
    'https://www.youtube.com/embed/ZL9pTiY1RPg',  // Vídeo 2
    'https://www.youtube.com/embed/VIDEO_ID_3'    // Vídeo 3
];

let currentVideoIndex = 0;
let player;

// Função chamada pela API do YouTube quando está pronta
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// Função para detectar o término do vídeo
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        document.getElementById('confirm-button').disabled = false;  // Habilita o botão de confirmação
    }
}

// Função para carregar o próximo vídeo
function loadNextVideo() {
    currentVideoIndex++;

    if (currentVideoIndex < videos.length) {
        player.loadVideoByUrl(videos[currentVideoIndex]);  // Carrega o próximo vídeo
        document.getElementById('confirm-button').disabled = true;  // Desabilita o botão de confirmação para o próximo vídeo
        document.getElementById('next-video-button').disabled = true;  // Desabilita o botão "Próximo Vídeo"
    } else {
        alert('Você completou todos os vídeos!');
    }
}

// Função para confirmar que o vídeo foi assistido
document.getElementById('confirm-button').onclick = function() {
    document.getElementById('next-video-button').disabled = false;  // Habilita o botão "Próximo Vídeo"
};
