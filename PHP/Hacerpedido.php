<?php
include("Conexion.php");
header("Content-Type: text/html;charset=utf-8");
$NombreCliente = $_POST['Nombre'];
$DireccionEnvio = $_POST['Direccion'];
$Telefono = $_POST['Telefono'];
$CantInd = $_POST['CantidadIndividual'];
$CantdTres = $_POST['CantidadTres'];
$Pedido = $_POST['Pedido'];
$TotalPagar = $_POST['Total'];

mysql_query("SET NAMES 'utf8'");

$Metodo = $_POST['Metodo'];
	
$query = "INSERT INTO Pedidos(NombreCliente, DireccionEnvio, Telefono, Pedido, TotalPagar, MetodoPago) values ('$NombreCliente', '$DireccionEnvio', '$Telefono', '$Pedido', '$TotalPagar', '$Metodo')";
mysql_query($query, $conexion) or die ("Problemas al almacenar datos");

header("Location: ../registroExitoso.php");

?>
