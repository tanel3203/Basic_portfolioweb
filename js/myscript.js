// JS

$(document).ready(function() {
	$(".thumbnail").hover(
		function() {
			$(this).addClass("js-hover");			
		},
		function() {
			$(this).removeClass("js-hover");
		}
	);
});