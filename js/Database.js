var createTable = "CREATE TABLE IF NOT EXIST Pedidos(Id INTEGER PRIMARY AUTOINCREMENT, NombreCliente varchar(50) NOT NULL, DireccionEnvio varchar(70) NOT NULL, Telefono varchar(10) NOT NULL, Pedido varchar(70) NOT NULL, TotalPagar varchar(10) NOT NULL, Metodo varchar(20) NOT NULL)";

var insertInto = "INSERT INTO Pedidos(NombreCliente, DireccionEnvio, Telefono, Pedido, TotalPagar, Metodo) VALUES (?,?,?,?,?,?)";

var SelectFrom = "SELECT * FROM Pedidos";


function calcularTotal()
{
	var Total = 0.00;
	var cantidadInd = document.getElementById("CantidadIndividual").value;
	var cantidadTres = document.getElementById("CantidadTres").value;
	var Pedido = "";

	if(document.getElementById('Individual').checked)
	{
		Total = Total + (9*cantidadInd);
		Pedido += "Paquete individal, cantidad: " + cantidadInd.toString() + " ; ";

	}
	if(document.getElementById('Tres').checked)
	{
		Total = Total + (25*cantidadTres);
		Pedido += "Paquete grupal, cantidad: " + cantidadTres.toString() + " ; ";
	}

	document.getElementById('Total').focus();
	document.getElementById('Total').value = '$'+Total.toString()+' .00';
	 document.getElementById('Pedido').value = Pedido;
}

function limpiarTodo()
{
	document.getElementById('Nombre').value = "";
	document.getElementById('Telefono').value = "";
	document.getElementById('Direccion').value = "";
	document.getElementById('Individual').checked = false;
	document.getElementById('CantidadIndividual').value = "";
	document.getElementById('Tres').checked = false;
	document.getElementById('CantidadTres').value = "";
	document.getElementById('Total').value = "";
	document.getElementById('Pedido').value = "";
	document.getElementById('tarjeta').checked = false;
	document.getElementById('deposito').checked = false;
	document.getElementById('paypal').checked = false;
}

var database = openDatabase('MaDonas', '1.0', 'Base de datos empresa Madonas', '2000000');

function startBd()
{
	try{
		if(!window.openDatabase)
		{
			alert('Las bases de datos SQLite no son soportadas en este navegador');
		}
		else
		{
			fcreateTable();
		}
	}
	catch(e)
	{
		if(e == 2)
		{
			console.log('Version de Base de Datos invalidad');
		}
		else
		{
			console.log('Error desconocido');
		}
		return;	
	}
}

function fcreateTable()
{
	database.transaction(
		function (tx){
			tx.executeSql(createTable, []);
		}
	)
}

function finsertInto()
{
	var NombreCliente = document.getElementById('Nombre').value;
	var DireccionEnvio = document.getElementById('Direccion').value;
	var Telefono = document.getElementById('Telefono').value;
	var Pedido = "";
	var TotalPagar = document.getElementById('Total').value;
	var Metodo = "";
	var Radiometodo = document.getElementsByName('Metodo');

	//Verificamos cual es el radio seleccionado
	for(var i = 0; i < Radiometodo.length; i++)
	{
		if(Radiometodo[i].checked)
		{
			Metodo = Radiometodo[i].value;
			break;
		}
	}

	//Creamos el pedido en texto
	var cantidadInd = document.getElementById("CantidadIndividual").value;
	var cantidadTres = document.getElementById("CantidadTres").value;

	if(document.getElementById('Individual').checked)
	{
		Pedido += "Pedido individual - Cantidad: "+cantidadInd.toString()+" ; ";
	}
	else if(document.getElementById('Tres').checked)
	{
		Pedido += "Pedido Grupal - Cantidad: "+cantidadTres.toString()+" ; ";
	}

	//Insertando en la Base de Datos

	/*database.transaction(
		function (tx){
			tx.executeSql(insertInto, [NombreCliente, DireccionEnvio, Telefono, Pedido, TotalPagar, Metodo]);
		});*/
	database.transaction(function (tx) {tx.executeSql(insertInto, [NombreCliente, DireccionEnvio, Telefono, Pedido, TotalPagar, Metodo]);});
}

function Login()
{
	var User = document.getElementById('User').value;
	var Pass = document.getElementById('Pass').value;

	if(User == 'AdminMaDonas')
	{
		if(Pass == 'LaSallePachuca')
		{
			window.location.assign("PHP/verPedidos.php");
		}
		else
		{
			alert("Contraseña incorrecta");
			document.getElementById('Pass').value = "";
		}
	}
	else
	{
		alert("No existe tal administrador");
		document.getElementById('User').value = "";
	}
}

$(document).ready(function() {
	
	startBd();});

