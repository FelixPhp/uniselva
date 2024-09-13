<?php
$servername = "localhost";
$username = "root"; // Usuário do MySQL
$password = "";     // Senha do MySQL
$dbname = "nome_do_banco"; // Nome do banco que você criou

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
