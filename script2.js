$(document).ready(function(){
	$(".link1").click(function(){
		$(".potter").toggle(500);
		$("h2").toggle(500);
	});
});

$(document).ready(function(){
	$(".link2").click(function(){
		$(".p-one").toggle(500);
	});
});

$(document).ready(function(){
	$(".link3").click(function(){
		$(".p-two").toggle(500);
	});
});

$(document).ready(function(){
	$(".link4").click(function(){
		$(".my-element").fadeToggle("slow");
	});
});

$(document).ready(function(){
	$(".link5").click(function(){
		$("#section-two").slideUp("slow");
	});
});

$(document).ready(function(){
	$(".link6").click(function(){
		$("#section-one").slideUp("slow");
	});
});

$(document).ready(function(){
	$(".link7").click(function(){
		$(".freaky1").animate({left: '400px', top: '150px'});
	});
});

$(document).ready(function(){
	$(".link8").click(function(){
		$(".freaky2").animate({left: '600px', top: '150px'});
	});
});


$(document).ready(function(){
	$(".link9").click(function(){
		$(".freaky3").animate({left: '400px', top: '330px'});
	});
});

$(document).ready(function(){
	$(".link10").click(function(){
		$(".freaky4").animate({left: '600px', top: '330px'});
	});
});

$(document).ready(function(){
	$(document).click(function(){
		$(".header").fadeIn("slow");
		$("h3").fadeIn("slow");
		$("h4").fadeOut("slow");
	});
});









