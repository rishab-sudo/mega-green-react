<?php
header("Content-Type: application/json");

$to = "megagreencity6@gmail.com";

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => false, "message" => "Invalid request"]);
    exit;
}

$name  = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");

// Common validation
if ($name === "" || $email === "" || $phone === "") {
    echo json_encode(["status" => false, "message" => "Name, Email & Phone required"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => false, "message" => "Invalid email"]);
    exit;
}

if (!preg_match("/^[0-9]{10}$/", $phone)) {
    echo json_encode(["status" => false, "message" => "Invalid phone number"]);
    exit;
}

/* CONTACT FORM */
if (isset($data["subject"]) && isset($data["message"])) {

    $subjectField = trim($data["subject"]);
    $messageField = trim($data["message"]);

    if ($subjectField === "" || $messageField === "") {
        echo json_encode(["status" => false, "message" => "All fields required"]);
        exit;
    }

    $subject = "New Contact Form - Mega Green City";

    $message = "New Contact Form Submission\n\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Subject: $subjectField\n\n";
    $message .= "Message:\n$messageField\n";
}

/* QUOTE FORM */
elseif (isset($data["address"]) && isset($data["product"])) {

    $address = trim($data["address"]);
    $product = trim($data["product"]);

    if ($address === "" || $product === "") {
        echo json_encode(["status" => false, "message" => "All fields required"]);
        exit;
    }

    $subject = "New Quote Request - Mega Green City";

    $message = "New Quote Request\n\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Address: $address\n";
    $message .= "Interest Level: $product\n";
}

else {
    echo json_encode(["status" => false, "message" => "Unknown form"]);
    exit;
}

$headers = "From: noreply@" . $_SERVER['SERVER_NAME'] . "\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["status" => true, "message" => "Form submitted successfully"]);
} else {
    echo json_encode(["status" => false, "message" => "Mail sending failed"]);
}
?>