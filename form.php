<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$name = $_POST["name"];
$email = $_POST["email"];
$enquiry = $_POST["enquiry"];

$to = "shreyamregmi5@gmail.com";

$subject = "NEW MESSAGE";

$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Enquiry: $enquiry\n";

if(mail($to, $subject, $body))
{
    echo "Email sent successfully";
}
else
{
    echo "Email Not Sent";
}

?>