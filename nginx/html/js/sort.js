(function () {
	$('.sort_button button').on('click', function (event) {
		event.preventDefault();
		$self = $(this);

		if ($self.hasClass('active')) {
			return;
		}

		$('.sort_contents li').hide();

		$('.sort_contents')
			.find('.' + $self.attr('class'))
			.show();

		$('.sort_button button.active').removeClass('active');
		$self.addClass('active');
	});
})();
