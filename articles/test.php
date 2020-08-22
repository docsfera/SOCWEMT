<?php

/*$text = $_POST['text'];
echo $text + 2;		// don't return !!!! */
$text = $_POST['text'];

$host = 'localhost'; // адрес сервера 
$database = 'docsfera'; // имя базы данных
$user = 'root'; // имя пользователя
$password = ''; // пароль
$usertable = 'articles';

$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));
$query ="SELECT * FROM articles WHERE type = '$text'";
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 

$result2 = $link->query($query);
$row = $result2->fetch_assoc();

$A = $row["id"] . " : " . $row["img"]  . " : " . $row["text"] . " : " . $row["title"] . " : " . $row["type"] . " : " . $row["stars"] . " : ";
if($result2->num_rows >0){
	while($row = $result2->fetch_assoc()){
		$A = $A . $row["id"] . " : " . $row["img"]  . " : " . $row["text"] . " : " . $row["title"] . " : " . $row["type"] . " : " . $row["stars"] . " : " ;
	}
}
echo $A;
?>