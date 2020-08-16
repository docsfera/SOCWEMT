<?php
// можно оформить в виде класса


//max(`id`) as `maxid` from `data`
$host = 'localhost'; // адрес сервера 
$database = 'docsfera'; // имя базы данных
$user = 'root'; // имя пользователя
$password = ''; // пароль
$usertable = 'articles';

$link = mysqli_connect($host, $user, $password, $database) 
		    or die("Ошибка " . mysqli_error($link));
 

function createphp($link,$Post){
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

	<div id ="ArticlesHead">
		<div class="SideText1"><a href="../index.php" class="AMain ASide">Menu</a></div>
		<div class="SideText2"><a href="../articles/articles.php" class="AMain ASide">Login</a></div>
		<div class="MainText"><a href="../articles/articles.php" class="AMain">SOCWEMT</a></div>
	</div>


		<div class="CreatorMain divtextaria">' . $Post . '</div></body>
</html>';
 
	$fp = fopen("../articlesphp/create_" . $last_id . ".php", "w");
 
// записываем в файл текст
	fwrite($fp, $text);
 
// закрываем
	fclose($fp);
}

function writerbd($link, $title, $text, $file_name){

	$usertable = 'articles';  // Повторное объявление глобальной переменной
	$query ="SELECT * FROM messeges";
	$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
		if($result and $text)
		{
		    $result2 = $link->query("INSERT INTO ".$usertable." (img, title, text, type) VALUES ( '$file_name', '$title', '$text', '3' )" );
		    //$result2 = $link->query("INSERT INTO ".$usertable." (text) VALUES ('txet')" );
		}   
		// закрываем подключение
		mysqli_close($link);
}

if ($_POST["function"]){
	writerbd($link, $_POST['title'], $_POST['text'], $_POST['file2']);
}else{
	createphp($link, $_POST['text']);
}

/*createphp($link, $_POST['text']);
writerbd($link, $_POST['text'], $_FILES["file"]["name"])*/

?>