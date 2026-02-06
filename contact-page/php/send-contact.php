<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: contact.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Bericht verstuurd</title>
</head>
<body>
    <h1>✅ Bericht verstuurd!</h1>
    <p>Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.</p>

    <a href="contact.php">⬅ Terug naar contact</a>
</body>
</html>
