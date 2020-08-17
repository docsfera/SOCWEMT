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
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
		<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
		<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
	</head>
	<body> 

	<nav class="navbar navbar-expand-md navbar-light bd-light">
				<div class="container-fluid">
					<a href="../articles/articles.php" class="navbar-brad">SOCWEMT</a>
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a href="../index.php" class="nav-link">Menu</a>
						</li>
						<li class="nav-item">
							<a href="../articles/articles.php" class="nav-link">Login</a>
						</li>
					</ul>
				</div>
			</nav>


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
		    $result2 = $link->query("INSERT INTO ".$usertable." (img, title, text, type) VALUES ( '$file_name', '$title', '$text', '2' )" );
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