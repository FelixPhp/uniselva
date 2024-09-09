// Monitoramento do vídeo
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        document.getElementById('confirm-button').disabled = false;
        document.getElementById('next-video-button').style.display = 'block';
    }
}

document.getElementById('confirm-button').addEventListener('click', function() {
    const nextVideoButton = document.getElementById('next-video-button');
    nextVideoButton.style.display = 'block';
    updateProgressBar(); // Atualiza a barra de progresso
});

document.getElementById('next-video-button').addEventListener('click', function() {
    const nextVideo = document.getElementById('video2');
    if (nextVideo) {
        nextVideo.classList.remove('disabled');
        const nextVideoId = nextVideo.getAttribute('data-video-id');
        player.loadVideoById(nextVideoId);  // Carrega o próximo vídeo
        this.style.display = 'none'; // Esconde o botão após carregar o próximo vídeo
    }
});

function updateProgressBar() {
    // Lógica para atualizar a barra de progresso
    let currentProgress = parseInt(document.getElementById('progressBar').value, 10);
    document.getElementById('progressBar').value = currentProgress + 10; // Incrementa 10% para cada vídeo assistido
}

// Salvando as anotações
document.getElementById('save-notes-button').addEventListener('click', function() {
    const notes = document.getElementById('notes').value;
    if (notes) {
        localStorage.setItem('userNotes', notes);
        alert('Anotações salvas com sucesso!');
    } else {
        alert('Por favor, insira alguma anotação antes de salvar
