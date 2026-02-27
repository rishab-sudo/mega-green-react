<?php
header("Content-Type: application/json");

$to = "megagreencity6@gmail.com";

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid data"]);
    exit;
}

$name = htmlspecialchars(trim($data["name"] ?? ""));
$email = htmlspecialchars(trim($data["email"] ?? ""));
$phone = htmlspecialchars(trim($data["phone"] ?? ""));

// Detect which form is submitted
$isContactForm = isset($data["subject"]);
$isQuoteForm   = isset($data["address"]);

// ------------------ CONTACT FORM ------------------
if ($isContactForm) {

    $subjectField = htmlspecialchars(trim($data["subject"] ?? ""));
    $messageField = htmlspecialchars(trim($data["message"] ?? ""));

    if (!$name || !$email || !$phone || !$subjectField || !$messageField) {
        http_response_code(400);
        echo json_encode(["message" => "All fields are required"]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid email"]);
        exit;
    }

    if (!preg_match("/^[0-9]{10}$/", $phone)) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid phone number"]);
        exit;
    }

    $subject = "New Contact Form Submission - Mega Green City";

    $message = "
New Contact Form Submission

Name: $name
Email: $email
Phone: $phone
Subject: $subjectField

Message:
$messageField
";

}

// ------------------ QUOTE FORM ------------------
elseif ($isQuoteForm) {

    $address = htmlspecialchars(trim($data["address"] ?? ""));
    $product = htmlspecialchars(trim($data["product"] ?? ""));

    if (!$name || !$email || !$phone || !$address || !$product) {
        http_response_code(400);
        echo json_encode(["message" => "All fields are required"]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid email"]);
        exit;
    }

    if (!preg_match("/^[0-9]{10}$/", $phone)) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid phone number"]);
        exit;
    }

    $subject = "New Quote Request - Mega Green City";

    $message = "
New Quote Request

Name: $name
Phone: $phone
Email: $email
Address: $address
Interest Level: $product
";
}

else {
    http_response_code(400);
    echo json_encode(["message" => "Unknown form submission"]);
    exit;
}

// ------------------ MAIL SEND ------------------

$headers = "From: Mega Green City <no-reply@yourdomain.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["message" => "Form submitted successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Mail failed. Contact hosting provider."]);
}
?>