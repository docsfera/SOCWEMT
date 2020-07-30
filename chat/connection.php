<?php
$host = 'localhost'; // адрес сервера 
$database = 'docsfera'; // имя базы данных
$user = 'root'; // имя пользователя
$password = ''; // пароль
$usertable = 'messeges';

$text = $_POST['text'];

// подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));
 
$query ="SELECT * FROM messeges";
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
if($result and $text)
{
    $result2 = $link->query("INSERT INTO ".$usertable." (text) VALUES ('$text')" );
}
     
// закрываем подключение
mysqli_close($link);
/*require_once 'connectionOut.php'; // Вывести обновленную базу данных*/
?>