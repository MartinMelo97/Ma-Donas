$(document).ready(function(){
	$('.parallax').parallax();
	$(".slider").slider();


	$(".button-collapse").sideNav();

	var scrollTop = $(document).scrollTop();

	$("#brand-logo").css({"margin-top":"22%",
												"font-size":"6em",
												"color":"#c2185b"});

	$("#brand-logo-s").css({"margin-top":"0%",
														"font-size":"2em",
														"color":"white"
													});

	$(document).on("scroll", function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 300){
			$("#brand-logo").css({"margin-top":"0%",
														"font-size":"2em",
														"color":"white"
													});
		}else{
			$("#brand-logo").css({"margin-top":"22%",
														"font-size":"6em",
														"color":"#c2185b"
													});
		}
	});

	/*var trad = $("#trad");
	var tres = $("#tres");
	
	if(trad.prop("checked", "checked")){
		tres.prop("disabled", "disabled");
	}else{
		tres.prop("disabled", "abled");
	}*/

});
