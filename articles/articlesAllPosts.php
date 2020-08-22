<?
$host = 'localhost'; // адрес сервера 
$database = 'docsfera'; // имя базы данных
$user = 'root'; // имя пользователя
$password = ''; // пароль
$usertable = 'articles';
$conn = new mysqli($host,$user,$password,$database);
$sql = "SELECT * FROM articles";
$result2 = $conn->query($sql);

    if($result2->num_rows >0) {
    	while($row = $result2->fetch_assoc()){

    		echo $row["id"] . " : " . $row["img"]  . " : " . $row["text"] . " : " . $row["title"] . " : " . $row["type"] . " : " . $row["stars"] . " : " ;

    	}
    }
    return $result2;
?>