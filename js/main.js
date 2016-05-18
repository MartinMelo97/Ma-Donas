$(document).ready(function(){
	$(".button-collapse").sideNav();

	var scrollTop = $(document).scrollTop();

	$(".brand-logo").css({"margin-top":"20%",
												"font-size":"6em",
												"color":"#c2185b"});

	

	$(document).on("scroll", function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 300){
			$(".brand-logo").css({"margin-top":"0%",
													"font-size":"2em",
													"color":"white"});
		}else{
			$(".brand-logo").css({"margin-top":"20%",
														"font-size":"6em",
														"color":"#c2185b"});
		}
	});
});