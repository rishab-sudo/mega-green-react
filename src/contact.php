<?php
header("Content-Type: application/json");

$to = "megagreencity6@gmil.com"; // 👈 change to your email
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
  http_response_code(400);
  echo json_encode(["message" => "Invalid data"]);
  exit;
}

$name = $data["name"] ?? "";
$phone = $data["phone"] ?? "";
$email = $data["email"] ?? "";
$address = $data["address"] ?? "";
$product = $data["product"] ?? "";

$subject = "New Quote Request";
$message = "Name: $name\n";
$message .= "Phone: $phone\n";
$message .= "Email: $email\n";
$message .= "Address: $address\n";
$message .= "Interest: $product\n";

$headers = "From: no-reply@yourdomain.com\r\nReply-To: $email";

if (mail($to, $subject, $message, $headers)) {
  echo json_encode(["message" => "Mail sent"]);
} else {
  http_response_code(500);
  echo json_encode(["message" => "Mail failed"]);
}