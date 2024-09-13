<?php
// Consultar a progressão dos alunos
$sql = "SELECT u.nome AS aluno, c.nome AS curso, p.status, p.data_atualizacao 
        FROM progressao p
        JOIN usuarios u ON p.aluno_id = u.id
        JOIN cursos c ON p.curso_id = c.id";

$result = $conn->query($sql);

echo "<table>";
echo "<tr><th>Aluno</th><th>Curso</th><th>Status</th><th>Última Atualização</th></tr>";
while ($row = $result->fetch_assoc()) {
    echo "<tr>
            <td>{$row['aluno']}</td>
            <td>{$row['curso']}</td>
            <td>{$row['status']}</td>
            <td>{$row['data_atualizacao']}</td>
          </tr>";
}
echo "</table>";
?>
