$(document).ready(function() {

	var selectedMood,selectedWhen,selectedWhere;

	function gotoTab(index)
	{
		var owl = $('#menucarousel').data('owlCarousel');
		owl.goTo(index);
	}

	$("#menucarousel").owlCarousel({items: 1});
	
	$("#moodMenu a").click(function(e) {
		selectedMood = $(this).html();
		$('#footerMood').html('<a href="#" onclick="gotoTab(0)">' + selectedMood + '</a>');
		gotoTab(1);	
	});
	


});
