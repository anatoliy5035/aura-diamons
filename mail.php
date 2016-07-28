<?php

$recepient = "a.bygyb@gmail.com";
$sitename = "TEST";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $phone \n: $comment \nПочта $email ";

$pagetitle = "Нова заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");