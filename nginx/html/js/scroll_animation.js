(function () {
	var controller = new ScrollMagic.Controller();

	var scene;
	var nodes = document.querySelectorAll('.scroll_animation');

	for (var index = 0; index < nodes.length; index++) {
		scene = new ScrollMagic.Scene({
			triggerElement: nodes[index],
			triggerHook: 0.7,
			duration: 0,
			offset: 0,
			reverse: false,
		})
			.setClassToggle(nodes[index], 'active')
			.addTo(controller);
	}
})();
