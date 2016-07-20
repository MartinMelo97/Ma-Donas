function login()
{
	var User = document.getElementById('User').value;
	var Pass = document.getElementById('Pass').value;

	if(User == 'AdminMadDonas')
	{
		if(Pass == 'LaSallePachuca')
		{
			window.location.assign("verPedidos.php");
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