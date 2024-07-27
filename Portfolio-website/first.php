<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Example email configuration using PHPMailer library
    require 'vendor/autoload.php'; // Include PHPMailer library

    // Create a new PHPMailer instance
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';  // Specify SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'krishnasharma18032005@gmail.com'; // SMTP username
    $mail->Password = 'Krishna^18';   // SMTP password
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;   // TCP port to connect to

    // Sender and recipient settings
    $mail->setFrom($email, $name);
    $mail->addAddress('krishnasharma18032005@gmail.com', 'Krishna'); // Add a recipient
    $mail->addReplyTo($email, $name);

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'New Form Submission';
    $mail->Body = "Name: $name<br>Email: $email<br>Message: $message";

    // Send email
    if ($mail->send()) {
        echo 'Message has been sent';
    } else {
        echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
    }
} else {
    echo 'Invalid request';
}
?>
