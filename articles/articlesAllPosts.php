<?
$host = 'localhost'; // адрес сервера 
$database = 'docsfera'; // имя базы данных
$user = 'root'; // имя пользователя
$password = ''; // пароль
$usertable = 'articles';
$conn = new mysqli($host,$user,$password,$database);
$sql = "SELECT * FROM articles";
$result2 = $conn->query($sql);
$data = [];
$star_0 = [];
$star_1 = [];
$star_2 = [];
    if($result2->num_rows >0) {
    	while($row = $result2->fetch_assoc()){

    		$arr = ['id' => $row["id"], 
    		'img' => $row["img"],
    		'text' => $row["text"],
    		'title' => $row["title"],
    		'type' => $row["type"],
    		'stars' => $row["stars"]
    								];
    		switch ($row["stars"]){
    			case 0: array_push($star_0, $arr); break;
    			case 1: array_push($star_1, $arr); break;
    			case 2: array_push($star_2, $arr); break;
    		}

    	}

    	

    }
    array_push($data, $star_0, $star_1, $star_2);
    echo json_encode($data, JSON_NUMERIC_CHECK);
?>