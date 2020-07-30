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
    		//echo "<br> id: ". $row["id"] . "<br> name: ". $row["name"] . "<br> text: ". $row["text"];
    		echo "<div style='border:1px solid #333;'> " .$row["id"] . " : " . $row["img"]  . $row["text"]. "</div>";
           // echo ($_COOKIE["logincook"]);


    	}
    }
    return $result2;
?>