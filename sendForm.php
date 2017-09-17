<?php


$dest = "danielnunes@hotmail.com";

$name = htmlentities($_POST['name']);
$email = htmlentities($_POST['email']);
$company = htmlentities($_POST['company']);
$message = htmlentities($_POST['message']);
$subject = "Message from website";
$newURL = "http://www.dndias.com/thankyou.html";



$body = "===================================" . "\n";
$body = $body . "MESSAGE" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Name: " . $name . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "Company" . $company . "\n";
$body = $body . "Message: " . $message . "\n\n";
$body = $body . "===================================" . "\n";

// envia o email
mail($dest, $subject , $body, null);

header("location:$newURL");


?>