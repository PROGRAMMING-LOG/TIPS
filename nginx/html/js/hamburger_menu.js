(function () {
	$('.button_container button').on('click', function (event) {
		event.preventDefault();
		var $self = $(this);

		if ($self.hasClass('active')) {
			$self.removeClass('active');
			$('.menu_container').removeClass('active');
		}
		//
		else {
			$self.addClass('active');
			$('.menu_container').addClass('active');
		}
	});

	$('.headline').on('click', function (event) {
		event.preventDefault();
		var $self = $(this);

		if ($self.closest('li').hasClass('active')) {
			$self.closest('li').removeClass('active');
			$self.closest('li').find('.sub_menu').slideUp(300);
		}
		//
		else {
			$self.closest('li').addClass('active');
			$self.closest('li').find('.sub_menu').slideDown(300);
		}
	});
})();
