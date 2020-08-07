<!DOCTYPE html>
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
				<h1 class="text-center">Summary</h1>
		<div class="container">
			<div class="row" >
				<!-- <div class="col-md-12 block-main-article"> -->

						<div class="col-md-4">
							<div class="dropZone">
								Для загрузки, перетащите файл сюда.
							</div>
						</div>
						<div class="col-md-8">
							<textarea type="text" name="texttitle" placeholder ='' class="CreatorTextarea " autofocus></textarea>
						</div>
						
						<!-- <div class="dropZone dropZone2 classcheck">Для загрузки, перетащите файл сюда.</div>
						<textarea type="text" name="texttitle" placeholder ='' class="CreatorTextarea " id = "sortpicture2"></textarea> -->
						<!-- </div> -->
				</div>
		</div>

				<hr />
				<!-- <div class="col-md-2 block-instruments"></div>
				<div class="col-md-8"></div>
				<div class="col-md-2 block-instruments"></div> -->
			
		<div class="container-fluid" style="padding:0;">

			<ul class="instruments">
				<li class="instruments-drop"> <a>+</a>
					<ul class="instrument">
						<li> <a id="instrument-text">Text</a> </li>
						<li> <a id="instrument-img">Image</a> </li>
					</ul>
				</li>
				<li class="instruments-drop"> <a id="instrument-b">B</a> </li>
				<li class="instruments-drop"> <a id="instrument-em">K</a> </li>
				
			</ul>

			<div class="row" style="background: orange; height: 1000px; z-index: -1;">
				
				<div id='div-canvas' class="col-md-12" style="position: static;">
					
				</div>
			
				
			</div>
			
		</div>	

		<!-- <div class="CreatorMain">
			<div >
				<div class="dropZone dropZone2 classcheck">Для загрузки, перетащите файл сюда.</div>
				<textarea type="text" name="texttitle" placeholder ='' class="CreatorTextarea " id = "sortpicture2"></textarea>
				
			</div>
			<div class="line"> </div>
			<div class="instruments">
				<div ><button class="instrument" onclick="change_text('<b>','</b>');ViewText();"><b>B</b></button>  </div>
				<div ><button class="instrument" onclick="clicktext();"><b>Text</b></button></div>
				<div ><button class="instrument" onclick="clickimg()"><b>Img</b></button></div>
			</div>
			<div class="CreatorBody"></div>
			<button onclick="filter();newphp()">ggg</button>
		</div> -->

		<script src="../script/creator.js"></script>
	</body>
</html>