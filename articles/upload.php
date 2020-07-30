<?php

    if ( 0 < $_FILES['file']['error'] ) {
        //echo 'Error: ' . $_FILES['file']['error'] . '<br>';
    }
    else {
        move_uploaded_file($_FILES['file']['tmp_name'], '../images/' . $_FILES['file']['name']);
        //echo var_dump($_POST) . var_dump($_FILES);
    }
    if ($_POST['text'] !== ''){  // Загрузка на сервер только первой картинки (тк вместе с ней посылается и текст)
    	$host = 'localhost'; // адрес сервера 
		$database = 'docsfera'; // имя базы данных
		$user = 'root'; // имя пользователя
		$password = ''; // пароль
		$usertable = 'articles';

		$text = $_POST['text'];
		$file_name = $_FILES["file"]["name"];
		// подключаемся к серверу
		$link = mysqli_connect($host, $user, $password, $database) 
		    or die("Ошибка " . mysqli_error($link));
		 
		$query ="SELECT * FROM messeges";
		$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
		if($result and $text)
		{
		    $result2 = $link->query("INSERT INTO ".$usertable." (img, text, type) VALUES ( '$file_name', '$text', '3' )" );
		    //$result2 = $link->query("INSERT INTO ".$usertable." (text) VALUES ('txet')" );
		}
		     
		// закрываем подключение
		mysqli_close($link);
		/*require_once 'connectionOut.php'; // Вывести обновленную базу данных*/
	}
	echo '../images/' . $_FILES['file']['name'];
?>