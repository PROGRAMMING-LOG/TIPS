(function () {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		// direction: 'vertical',
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// Default parameters
		slidesPerView: 1,
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 768px
			768: {
				slidesPerView: 2,
			},
		},
	});
})();
