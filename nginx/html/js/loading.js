(function () {
	$('.loading_button_01').on('click', function (event) {
		event.preventDefault();

		$('.loading_01')
			.stop()
			.fadeIn(function () {
				setTimeout(() => {
					$('.loading_01').stop().fadeOut();
				}, 3000);
			});
	});

	$('.loading_button_02').on('click', function (event) {
		event.preventDefault();

		$('.loading_02')
			.stop()
			.fadeIn(function () {
				setTimeout(() => {
					$('.loading_02').stop().fadeOut();
				}, 3000);
			});
	});

	$('.loading_button_03').on('click', function (event) {
		event.preventDefault();

		var loadingPosition = returnLoadingPosition(event);
		$('.loading_03').css(loadingPosition);

		$(window).on('mousemove', function (me) {
			var loadingPosition = returnLoadingPosition(me);
			$('.loading_03').css(loadingPosition);
		});

		$('.loading_03')
			.stop()
			.fadeIn(function () {
				setTimeout(() => {
					$('.loading_03').stop().fadeOut();
				}, 3000);
			});
	});

	function returnLoadingPosition(event) {
		return {
			top: event.pageY + $('.loading_03').outerHeight() / 2,
			left: event.pageX + $('.loading_03').outerWidth() / 2,
		};
	}
})();
