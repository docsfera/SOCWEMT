<?php
if(!$_COOKIE["name"]){
	
	echo '<form id="" method="POST" action="">		
			<input  id="autoname" name="autoname" type="text" placeholder="Name"/ autofocus>
			<br>
			<input  id="autopass" name="autopass" type="text" placeholder="Password"/ autofocus>
			<input  type="submit" onclick="window.location.reload()" value="Отправить"/ >
		</form>';

}else{
	echo '<a href="chat/chatIndex.php">Chat</a>';
}
?>