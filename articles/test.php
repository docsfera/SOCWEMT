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
$data = [];
$arr = ['id' => $row["id"], 
    		'img' => $row["img"],
    		'text' => $row["text"],
    		'title' => $row["title"],
    		'type' => $row["type"],
    		'stars' => $row["stars"]
    								];
    array_push($data, $arr);								
if($result2->num_rows >0){
	while($row = $result2->fetch_assoc()){
		
		$arr = ['id' => $row["id"], 
    		'img' => $row["img"],
    		'text' => $row["text"],
    		'title' => $row["title"],
    		'type' => $row["type"],
    		'stars' => $row["stars"]
    								];

    		array_push($data, $arr);
	}
}
    echo json_encode($data, JSON_NUMERIC_CHECK);
?>