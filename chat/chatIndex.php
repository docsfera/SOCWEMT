<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>
		<link href="../style.css" rel="stylesheet" type="text/css"/>
		<script src="http://code.jquery.com/jquery-1.8.3.js"></script>
		<!-- <script src="../script/java.js"></script> -->	
	</head>
	<body>
		<?php
			require_once 'connection.php'; // подключаем скрипт
		?>
		<div id="chat">
			<?php
				require_once 'connectionOut.php'; // подключаем скрипт
			?>
		</div>
		<form id="" method="POST" action="">
 
		

			<input  id="what" name="text" type="text" placeholder="Текст"/ autofocus>

			<input  type="submit" onclick="countRabbits()" value="Отправить"/ >
		</form>
		<a href="../index.php">Back</a>

		<script type="text/javascript">

		

		 setInterval(function() {
		 		$.ajax({
					  url: 'connectionOut.php',
					  success: function(result2){
					  var element = document.getElementById('chat');
					  var link = document.createElement('div');
					  //link.innerHTML = result2;
					  element.innerHTML = result2;
					  //element.appendChild(link);
		  			}		  							
				});
		  }, 30000);
		var block = document.getElementById("chat");
		block.scrollTop = block.scrollHeight;

	</script>

	</body>
</html>