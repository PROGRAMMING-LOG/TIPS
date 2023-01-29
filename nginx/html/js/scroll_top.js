(function () {
	$('.scroll_top_button').click(function (e) {
		e.preventDefault();

		var speed = 800;
		var href = $(this).attr('href');
		var target = '';

		if (href === '#' || href === '') {
			target = 'html';
		}
		//
		else {
			target = href;
		}

		var position = $(target).offset().top;

		$('body, html').stop().animate({ scrollTop: position }, speed, 'swing');
	});

	// スロットル
	$(window).on(
		'scroll.throttle',
		$.throttle(500, function () {
			if ($(window).scrollTop() > 200) {
				$('.scroll_top_button').stop().fadeIn();
			}
			//
			else {
				$('.scroll_top_button').stop().fadeOut();
			}
		})
	);

	// 指定位置までスクロールしたら fixed を解除する
	$(window).on('scroll.scroll_top_button', function () {
		if (
			$(window).scrollTop() + $(window).outerHeight() >=
			$('footer').offset().top
		) {
			$('.scroll_top_button').addClass('absolute');
		}
		//
		else {
			$('.scroll_top_button').removeClass('absolute');
		}
	});
})();
