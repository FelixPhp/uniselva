<?php
include('db.php');
session_start();

// Verifica se o usuário é administrador
if ($_SESSION['tipo_usuario'] != 'administrador') {
    header("Location: login.php");
    exit();
}

// Adicionar uma nova aula
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['adicionar_aula'])) {
    $curso_id = $_POST['curso_id'];
    $titulo = $_POST['titulo'];
    $link_aula = $_POST['link_aula'];

    $sql = "INSERT INTO aulas (curso_id, titulo, link_aula) 
            VALUES ('$curso_id', '$titulo', '$link_aula')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Aula adicionada com sucesso!";
    } else {
        echo "Erro: " . $conn->error;
    }
}

// Exibir o formulário de adição de aula
?>
<form action="admin_dashboard.php" method="POST">
    <label for="curso_id">Curso:</label>
    <select name="curso_id">
        <?php
        $result = $conn->query("SELECT id, nome FROM cursos");
        while ($curso = $result->fetch_assoc()) {
            echo "<option value='" . $curso['id'] . "'>" . $curso['nome'] . "</option>";
        }
        ?>
    </select><br>
    
    <label for="titulo">Título da Aula:</label>
    <input type="text" name="titulo" required><br>
    
    <label for="link_aula">Link da Aula:</label>
    <input type="text" name="link_aula" required><br>
    
    <button type="submit" name="adicionar_aula">Adicionar Aula</button>
</form>
