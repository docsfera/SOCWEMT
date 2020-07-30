<? setcookie('name', $_POST['autoname']); ?>
<!DOCTYPE html>
<html>
	<head>
		<script src="../script/java.js"></script>
	</head>
	<body>
	<?
		require_once 'core/autarization1.php'; // подключаем скрипт
	?>
	<a href="articles/articles.php">articles</a>
	<a href="articles/creator.php">Create article</a>
	</body>
</html>