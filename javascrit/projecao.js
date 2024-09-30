// Dados fictícios de cursos e alunos
const courses = [
    { id: 1, name: "Curso de Integração" },
    { id: 2, name: "Curso de Etica" },
    { id: 3, name: "Curso de Gestão" },
];

const students = {
    1: [
        { name: "João", progress: 70 },
        { name: "Maria", progress: 50 },
    ],
    2: [
        { name: "Lucas", progress: 80 },
        { name: "Ana", progress: 30 },
    ],
    3: [
        { name: "Carlos", progress: 100 },
        { name: "Fernanda", progress: 60 },
    ],
};

// Referências aos elementos HTML
const courseList = document.getElementById('courseList');
const studentProgress = document.getElementById('studentProgress');

// Função para carregar cursos como botões
function loadCourses() {
    courses.forEach(course => {
        const button = document.createElement('button');
        button.textContent = course.name;
        button.addEventListener('click', () => loadStudents(course.id));
        courseList.appendChild(button);
    });
}

// Função para carregar alunos e progresso
function loadStudents(courseId) {
    studentProgress.innerHTML = ''; // Limpar conteúdo anterior
    const courseStudents = students[courseId];

    courseStudents.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.textContent = `${student.name} - ${student.progress}%`;

        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.style.width = `${student.progress}%`;
        progressBar.textContent = `${student.progress}%`;

        studentDiv.appendChild(progressBar);
        studentProgress.appendChild(studentDiv);
    });
}

// Carregar os cursos ao iniciar a página
loadCourses();
