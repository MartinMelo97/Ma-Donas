<?php

$host = "mysql.hostinger.mx";
$user = "u530003634_melo";
$pass = "cbtis2014$";
$basedatos = "u530003634_curso";

$conexion = mysql_connect($host, $user, $pass) or die ("Problemas en la conexion");
mysql_select_db($basedatos, $conexion) or die ("Problemas con la base de datos");

?>
