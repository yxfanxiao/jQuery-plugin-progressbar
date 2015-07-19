;
(function ($) {
	$.fn.loading = function () {
		var DEFAULTS = {
			'progress-color': '#4b86db',
			'background-color': '#b3cef6',
			percent: 75,
			duration: 2000
		};	
		var $rotate = $(this).find('.rotate');
		setTimeout(function () {
			$rotate.css('transform','rotate(270deg)');
		},1);
	}
})(jQuery);