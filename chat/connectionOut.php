<?php
$host = 'localhost'; // адрес сервера 
$database = 'docsfera'; // имя базы данных
$user = 'root'; // имя пользователя
$password = ''; // пароль
$usertable = 'messeges';
// подключаемся к серверу
/*$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));

$sql = "SELECT * FROM messeges";

$result = mysqli_query($link, $sql);

while ($row = mysqli_fetch_array($result)) {
    echo("Город: " . $row['text'] . "; Идентификатор: . " . $row['id'] . "<br>");
}
     
return $result;*/
$conn = new mysqli($host,$user,$password,$database);
$sql = "SELECT * FROM messeges";
$result2 = $conn->query($sql);

    if($result2->num_rows >0) {
    	while($row = $result2->fetch_assoc()){
    		//echo "<br> id: ". $row["id"] . "<br> name: ". $row["name"] . "<br> text: ". $row["text"];
    		echo "<div style='border:1px solid #333;'> " .$row["id"] . " : " . $row["text"] . " </div>";
           // echo ($_COOKIE["logincook"]);


    	}
    }
    return $result2;

?>