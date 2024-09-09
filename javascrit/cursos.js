// index.js

// Função para permitir a edição dos campos do curso
function enableEdit(event) {
    const card = event.target.closest('.course-card');
    const titleInput = card.querySelector('.course-title');
    const descriptionTextarea = card.querySelector('.course-description');
    
    if (titleInput.hasAttribute('readonly')) {
        titleInput.removeAttribute('readonly');
        descriptionTextarea.removeAttribute('readonly');
        titleInput.focus();
        event.target.textContent = 'Salvar';
    } else {
        titleInput.setAttribute('readonly', 'readonly');
        descriptionTextarea.setAttribute('readonly', 'readonly');
        event.target.textContent = 'Editar';
    }
}

// Adiciona um ouvinte de evento para todos os botões de edição
document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', enableEdit);
});

// Função para adicionar um novo curso
document.getElementById('add-course-btn').addEventListener('click', function() {
    // Cria um novo elemento de cartão de curso
    const newCard = document.createElement('div');
    newCard.className = 'course-card';
    newCard.innerHTML = `
        <input type="text" class="course-title" value="Novo Curso" readonly>
        <textarea class="course-description" readonly>Descrição do novo curso.</textarea>
        <a href="#" class="course-button">Iniciar Curso</a>
        <button class="edit-btn">Editar</button>
    `;

    // Adiciona o novo cartão ao contêiner de cursos
    document.getElementById('course-container').appendChild(newCard);

    // Adiciona o ouvinte de evento para o novo botão de edição
    newCard.querySelector('.edit-btn').addEventListener('click', enableEdit);
});
