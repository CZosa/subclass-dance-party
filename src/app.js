$(document).ready(function() {
	window.dancers = [];

	$('.addDancerButton').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		var dancer = MakeDancer(
			$("body").height() * Math.random(),
			$("body").width() * Math.random(),
			Math.random() * 1000
		);
		
		dancers.push(dancer);
		
		$('body').append(dancer.$node);
	});




	
});