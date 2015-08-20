$(function(){

	// -------------------------------------------------

	// popup


	$("#button").on("click", function(){

		$("#overlay").removeClass("hide");

		$("#popupInfo").animate({top:"50%"},1500);

	})

	$("#closePopup").on("click", function(){

		$("#popupInfo").animate({top:"-50%"});

		$("#overlay").addClass("hide");

	})

});