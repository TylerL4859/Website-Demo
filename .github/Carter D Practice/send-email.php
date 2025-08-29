<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $reason = htmlspecialchars($_POST['reason']);
    $notes = htmlspecialchars($_POST['notes']);

    $to = "tyler.a.lawson@outlook.com"; // Replace with your email address
    $subject = "New Appointment Request";
    $body = "You have received a new appointment request:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Phone: $phone\n" .
            "Preferred Date: $date\n" .
            "Reason for Visit: $reason\n" .
            "Notes: $notes\n";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Your appointment request has been sent successfully.";
    } else {
        echo "There was an error sending your request. Please try again.";
    }
}
?>