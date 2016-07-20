<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title>Ma'Donas | Pedido exitoso</title>
	<link rel="stylesheet" href="../css/main.css">
	<link rel="stylesheet" href="../css/materialize.min.css">
	<link rel="stylesheet" href="../css/animate.css">
	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<script src="../js/materialize.min.js"></script>
	<script src="../js/main.js"></script>
</head>
<body>
	
	<div class="navbar-fixed">
		<nav>
	    <div class="nav-wrapper pink darken-2">
	      <a href="../index.html" class="brand-logo animated fadeIn delay-1 pacifico center" id="brand-logo-s">Ma'Donas</a>
	      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
	      <ul class="left hide-on-med-and-down">
	      	<li><a href="../administrador.html" class="waves-effect waves-dark">Administrador</a></li>
	      </ul>
	      <ul class="right hide-on-med-and-down">
	        <li><a href="../unidad1.html">Unidad 1</a></li>
	      	<li><a href="../unidad2.html">Unidad 2</a></li>
	        <li><a href="../pedidos.html">Pedidos</a></li>
	        <li><a href="../ubicacion.html">Ubicación</a></li>
	        <li><a href="../conocenos.html">Conocenos</a></li>
	      </ul>
	      <ul class="side-nav" id="mobile-demo">
	        <li><a href="../unidad1.html">Unidad 1</a></li>
	      	<li><a href="../unidad2.html">Unidad 2</a></li>
	        <li><a href="../pedidos.html">Pedidos</a></li>
	        <li><a href="../ubicacion.html">Ubicación</a></li>
	        <li><a href="../conocenos.html">Conocenos</a></li>
	      </ul>
	    </div>
	  </nav>
	</div>

		<div class="cover animated fadeIn" style="">
			<?php
	include("Conexion.php");
	$query = "SELECT * FROM Pedidos";
	$peticion = mysql_query($query);
	$i = 1;
	$divconte = '';
			while($fila = mysql_fetch_array($peticion))
			{
				$divconte .= '<h1 class="slab top-space-2 gray-text text-darken-4 center">Pedido #'.$i. '</h1><br>';
				$divconte .= '<h4 class="slab" text-white>Nombre del Cliente: '.utf8_encode($fila['NombreCliente']).'</h4><br>';
				$divconte .= '<h4 class="slab" text-white>Dirección de envío: '.$fila['DireccionEnvio'].'</h4><br>';
				$divconte .= '<h4 class="slab" text-white>Tel&eacute;fono: '.utf8_encode($fila['Telefono']).'</h4><br>';
				$divconte .= '<h4 class="slab" text-white>Pedido ordenado: '.utf8_encode($fila['Pedido']).'</h4><br>';
				$divconte .= '<h4 class="slab" text-white>Total a Pagar: '.utf8_encode($fila['TotalPagar']).'</h4><br>';
				$divconte .= '<h4 class="slab" text-white>Método de pago: '.utf8_encode($fila['MetodoPago']).'</h4><br>';
				$divconte .= '<br>';
				$i = $i + 1;
				echo $divconte;
				$divconte = "";
			}
?>
		</div>

</body>
</html>