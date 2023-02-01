(function () {
	var index = 3;
	var shows = 3;
	var length = $('.flex_box_01 .box').length;

	$('.flex_box_01_container .more').click(function (e) {
		e.preventDefault();

		var $self = $(this);

		$('.flex_box_01 .box:lt(' + (index + shows) + ')')
			.fadeIn()
			.css('display', 'flex');

		index = index + shows;

		if (index >= length) {
			$self.fadeOut();
		}
	});
})();
