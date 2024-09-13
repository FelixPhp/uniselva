<?php
// Consultar feedbacks dos alunos
$sql = "SELECT u.nome AS aluno, f.feedback, c.nome AS curso 
        FROM feedbacks f
        JOIN usuarios u ON f.aluno_id = u.id
        JOIN cursos c ON f.curso_id = c.id";

$result = $conn->query($sql);

echo "<h2>Feedbacks dos Alunos</h2>";
while ($row = $result->fetch_assoc()) {
    echo "<p>Aluno: " . $row['aluno'] . "<br>Curso: " . $row['curso'] . "<br>Feedback: " . $row['feedback'] . "</p>";
}
?>
