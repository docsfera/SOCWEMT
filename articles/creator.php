<!DOCTYPE html>
<html>
	<head>
		
		<link href="../style.css" rel="stylesheet" type="text/css"/>
		<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
	</head>
	<body>

		<div id ="ArticlesHead">
			<div class="SideText1"><a href="../index.php" class="AMain ASide">Menu</a></div>
			<div class="SideText2"><a href="../articles/articles.php" class="AMain ASide">Login</a></div>
			<div class="MainText"><a href="../articles/articles.php" class="AMain">SOCWEMT</a></div>
		</div>


		<div class="CreatorMain">
			<div >
				<div class="dropZone dropZone2 classcheck">Для загрузки, перетащите файл сюда.</div>
				<textarea type="text" name="texttitle" placeholder ='' class="CreatorTextarea " id = "sortpicture2"></textarea>
				<!-- <button id="upload">Upload</button> -->
			</div>
			<div class="line"> </div>
			<div class="instruments">
				<div ><button class="instrument" onclick="change_text('<b>','</b>');ViewText();"><b>B</b></button>  </div>
				<div ><button class="instrument" onclick="clicktext();"><b>Text</b></button></div>
				<div ><button class="instrument" onclick="clickimg()"><b>Img</b></button></div>
			</div>
			<div class="CreatorBody"></div>
			<button onclick="filter();newphp()">ggg</button>
		</div>

		<script src="../script/creator.js"></script>
	</body>
</html>