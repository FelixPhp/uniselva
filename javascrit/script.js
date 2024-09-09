const videoElement = document.getElementById('courseVideo');
const progressBar = document.getElementById('progressBar');

videoElement.addEventListener('timeupdate', () => {
    const duration = videoElement.duration;
    const currentTime = videoElement.currentTime;
    
    if (duration > 0) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;
    }
});

function nextVideo() {
    alert('Função para próximo vídeo!');
    // Lógica para carregar o próximo vídeo
}
