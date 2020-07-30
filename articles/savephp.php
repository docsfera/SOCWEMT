<?php
//max(`id`) as `maxid` from `data`
$host = 'localhost'; // адрес сервера 
$database = 'docsfera'; // имя базы данных
$user = 'root'; // имя пользователя
$password = ''; // пароль
$usertable = 'articles';

$link = mysqli_connect($host, $user, $password, $database);
 
$query ="SELECT id FROM articles ORDER BY id DESC LIMIT 1";
//$query ="SELECT MAX(id) FROM articles";
$result = mysqli_query($link, $query);
if($result->num_rows >0) {
    	while($row = $result->fetch_assoc()){
    		//echo "<br> id: ". $row["id"] . "<br> name: ". $row["name"] . "<br> text: ". $row["text"];
    		$last_id = $row["id"];
           // echo ($_COOKIE["logincook"]);


    	}
    }

	$text ='<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>
		<link href="../style.css" rel="stylesheet" type="text/css"/>
		<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
	</head>
	<body> 
		<div class="CreatorMain">' . $_POST['text'] . '</div></body>
</html>';
 
	$fp = fopen("../articlesphp/create_" . $last_id . ".php", "w");
 
// записываем в файл текст
fwrite($fp, $text);
 
// закрываем
fclose($fp);
?>