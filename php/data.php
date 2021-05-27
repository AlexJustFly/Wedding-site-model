<?php

$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$name = trim($_POST['name']);
$dt = date('Y-m-d H:i:s');

if ($phone == '' || $name == '') {
	echo 'Заполните данное поле!';
}
/*elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	echo 'Email некорректный!';
}*/
else {
	file_put_contents('apps.txt', "$dt $name $phone $email \n", FILE_APPEND);
	echo "1";
}