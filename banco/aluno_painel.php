<?php
include('db.php');
session_start();

// Consultar as aulas disponíveis para o aluno
$aluno_id = $_SESSION['usuario_id'];

$sql = "SELECT a.titulo, a.link_aula, c.nome AS curso
        FROM aulas a
        JOIN cursos c ON a.curso_id = c.id
        JOIN progressao p ON p.curso_id = c.id
        WHERE p.aluno_id = '$aluno_id'";

$result = $conn->query($sql);

echo "<h2>Aulas Disponíveis</h2>";
while ($row = $result->fetch_assoc()) {
    echo "<p>Curso: " . $row['curso'] . "<br>Aula: <a href='" . $row['link_aula'] . "' target='_blank'>" . $row['titulo'] . "</a></p>";
}
?>
