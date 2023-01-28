(function () {
	// Youtube Modal
	$('.video-play').click(function (e) {
		e.preventDefault();
		var self = this;

		$('.video-modal').fadeIn(function () {
			$('.video-modal .video-information').html(
				$(self).attr('data-information')
			);
			$('.video-modal iframe').attr('src', $(self).attr('rel'));
			$('.video-modal').find('.close-button').focus();
		});
	});

	$('.video-modal .close-button').click(function (e) {
		e.preventDefault();
		var self = this;

		$('.video-modal').fadeOut(function () {
			$('.video-modal iframe').removeAttr('src');
			$('.video-modal .video-information').empty();
		});
	});

	$('.video-modal .video-modal-background').click(function (e) {
		var self = this;
		e.preventDefault();

		$('.video-modal').fadeOut(function () {
			$('.video-modal iframe').removeAttr('src');
			$('.video-modal .video-information').empty();
		});
	});

	// Image Modal
	$('.image-enlarge').click(function (e) {
		e.preventDefault();
		var self = this;

		$('.image-modal .large-image').off('load');
		$('.image-modal .large-image').on('load', function () {
			$('.image-modal').fadeIn(function () {
				$('.image-modal').find('.close-button').focus();
			});
		});

		$('.image-modal .large-image').attr('src', $(self).attr('rel'));
	});

	$('.image-modal .close-button').click(function (e) {
		e.preventDefault();
		var self = this;

		$('.image-modal').fadeOut(function () {
			$('.image-modal .large-image').removeAttr('src');
		});
	});

	$('.image-modal .image-modal-background').click(function (e) {
		e.preventDefault();
		var self = this;

		$('.image-modal').fadeOut(function () {
			$('.image-modal .large-image').removeAttr('src');
		});
	});
})();
