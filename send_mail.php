<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Adresse email où vous souhaitez recevoir les messages
    $to = "ornichemulangu7.com";
    $subject = "Nouveau message depuis le site web";
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";

    // Envoi du mail
    if (mail($to, $subject, $body)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite. Veuillez réessayer.";
    }
}
?>
