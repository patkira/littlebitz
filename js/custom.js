$(function(){

	$('.modal').on('shown.bs.modal', function () {
		var flexslider = $(this).find('.flexslider');
		$(flexslider).flexslider({
			animation: "slide",
			controlNav: "thumbnails"
		});
	});
});