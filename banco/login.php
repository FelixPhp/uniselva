<?php
session_start();
include('db.php'); // Inclui a conexão com o banco

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $sql = "SELECT * FROM usuarios WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        // Verifica a senha
        if (password_verify($senha, $user['senha'])) {
            $_SESSION['usuario_id'] = $user['id'];
            $_SESSION['tipo_usuario'] = $user['tipo_usuario'];
            $_SESSION['nome'] = $user['nome'];

            // Redireciona dependendo do tipo de usuário
            if ($user['tipo_usuario'] == 'administrador') {
                header("Location: admin_dashboard.php");
            } else {
                header("Location: aluno_dashboard.php");
            }
        } else {
            echo "Senha incorreta!";
        }
    } else {
        echo "Usuário não encontrado!";
    }
}
?>
