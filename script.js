
//Examples of callbacks

//declare a function called myFunc and print message to console

var myFunc = function(){alert("Whoopie!");}
	console.log(myFunc());

//declare function superFly, which takes fucntion megaDude as an argument,
//does something undefined, and then runs megaDude

function superFly(megaDude){ console.log(2016-1979); megaDude(); }

//call function superFly, run myFunc as argument, and runs math from
//superFly to console

superFly(myFunc);

//Examples of callbacks and event handling using document ready

//When document is ready, call a function that will print alert

$(document).ready(function(){
	alert("The document is quite ready");
});

//When ready, call a function to
//hide or show outer div slowly when h1 class cool is clicked

$(document).ready(function(){
	$(".cool").click(function(){
		$("#outer").toggle("slow");
	});
});


//When ready, call a function to 
//fade out sec1 div at the speed of 1 second when you hover over div

$(document).ready(function(){
	$(".sec1").click(function(){
		$(".sec1").fadeOut(1000);
	});
});

//When ready, call a function to 
//fade in sec1 div quickly when h1 is clicked

$(document).ready(function(){
	$(".sec2").click(function(){
		$(".sec1").fadeIn("fast");
	});
});

//call a function to
//slide up sec3 div quickly over sec 2 when it's clicked

$(document).ready(function(){
	$(".sec3").click(function(){
		$(".sec2").slideUp("fast");
	});
});

//call function to print alert message when anywhere
//on the document (or body) is double clicked

$(document).ready(function(){
	$(document).dblclick(function(){
		alert("You have discovered my secret.");
	});
});

