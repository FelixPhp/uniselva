// Defina o número de aulas
const numberOfClasses = 10;

// Links das aulas, avaliação e feedback
const courseLinks = [
    'https://www.youtube.com/watch?v=FtEVgwwGwDs',
    'https://www.youtube.com/watch?v=ObKWwhGJ8rs',
    'https://exemplo.com/aula3',
    'https://exemplo.com/aula4',
    'https://exemplo.com/aula5',
    'https://exemplo.com/aula6',
    'https://exemplo.com/aula7',
    'https://exemplo.com/aula8',
    'https://exemplo.com/aula9',
    'https://exemplo.com/aula10',
];
const evaluationLink = 'aulas/avaliacao.html';
const feedbackLink = 'aulas/feedback.html';

let currentLesson = 0; // A aula atual que o usuário está assistindo

// Função para carregar o conteúdo no iframe
function loadContent(link) {
    document.getElementById('courseFrame').src = link;
    document.getElementById('confirmButton').style.display = 'none'; // Esconder botão de confirmação até que o vídeo termine
}

// Gerar botões de aula, avaliação e feedback dinamicamente
window.onload = function() {
    const sidebar = document.getElementById('sidebar');

    // Gerar botões de aulas
    for (let i = 0; i < numberOfClasses; i++) {
        let button = document.createElement('button');
        button.innerHTML = `Aula ${i + 1}`;
        button.disabled = i !== 0; // Somente o primeiro botão está habilitado inicialmente
        button.onclick = function() {
            currentLesson = i;
            loadContent(courseLinks[i]); // Carregar no iframe o link da aula correspondente
        };
        sidebar.appendChild(button);
    }

    // Botão de Avaliação
    let evaluationButton = document.createElement('button');
    evaluationButton.innerHTML = "Avaliação";
    evaluationButton.onclick = function() {
        loadContent(evaluationLink); // Carregar no iframe a página de avaliação
    };
    sidebar.appendChild(evaluationButton);

    // Botão de Feedback
    let feedbackButton = document.createElement('button');
    feedbackButton.innerHTML = "Feedback";
    feedbackButton.onclick = function() {
        loadContent(feedbackLink); // Carregar no iframe a página de feedback
    };
    sidebar.appendChild(feedbackButton);
}

// Monitorar progresso do vídeo no iframe
function monitorVideoProgress() {
    const iframe = document.getElementById('courseFrame');

    // Supondo que as aulas sejam vídeos hospedados em um player compatível com eventos de finalização (ex: YouTube)
    iframe.contentWindow.addEventListener('ended', function() {
        document.getElementById('confirmButton').style.display = 'block'; // Mostrar botão de confirmação quando o vídeo terminar
    });
}

// Função chamada ao confirmar o conteúdo
function confirmContent() {
    // Liberar o próximo botão de aula
    if (currentLesson < numberOfClasses - 1) {
        const sidebar = document.getElementById('sidebar');
        sidebar.children[currentLesson + 1].disabled = false; // Habilitar o próximo botão de aula
    }
    document.getElementById('confirmButton').style.display = 'none'; // Esconder o botão de confirmação
}