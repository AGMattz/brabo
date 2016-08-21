<?php
require_once('classes/config.php');
require_once('classes/functions.php');


/*Check to see if the form was submitted from the installed domain. If so,
process the data. If not, kill the script. Obviously, you can disable this, but
it's strongly recommended that you keep this check in place.*/
$domain = $_SERVER['HTTP_HOST'];
$uri = parse_url($_SERVER['HTTP_REFERER']);
$r_domain = $uri['host'];

if ( $domain == $r_domain ) {

	/*Open the connection to our database use the info from the config file.*/
	$link = f_sqlConnect(DB_USER, DB_PASSWORD, DB_NAME);

	/*This cleans our &_POST array to prevent against SQL injection attacks.*/
	$_POST = f_clean($_POST);

	/*These are the main variables we'll use to process the form.*/
	$table = "hctempleden";
	$keys = implode(", ", (array_keys($_POST)));
	$values = implode("', '", (array_values($_POST)));

	/*Insert out values into the database.*/
	$sql="INSERT INTO $table ($keys) VALUES ('$values')";

	if (!mysql_query($sql)) {
		die('Error3: ' . mysql_error());
	}

	/*Close our database connection.*/
	mysql_close();

} else {
	die('You are not allowed to submit data to this form');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Gelukt</title>
    <link rel="stylesheet" href="css/lidworden.css">
</head>
<body>
    <a href="lidworden.php" class="middle">Gelukt. Ga Terug</a>
</body>
</html>
