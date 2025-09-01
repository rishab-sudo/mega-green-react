<?php
// Set email recipient
$to = "owner@example.com";
$data = json_decode(file_get_contents("php://input"));

if ($data) {
    $subject = "New Contact Form Submission";
    $message = "Name: " . $data->firstname . " " . $data->lastname . "\n";
    $message .= "Email: " . $data->email . "\n";
    $message .= "Message:\n" . $data->message;

    $headers = "From: no-reply@example.com";

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Mail sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Mail sending failed."]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "Invalid data."]);
}
