(function () {
	var data = {
		text: 'abcd',
		number: 1234,
	};

	$.ajax({
		type: 'post',
		url: 'http://localhost:8000/api/',
		data: JSON.stringify(data),
		dataType: 'json',
		contentType: 'application/json',
		success: function (response) {
			if (response.status === 'success') {
				console.log('SUCCESS');
				$('#result').html('SUCCESS');
			}
			//
			else {
				console.log('ERROR');
			}
		},
		error: function () {},
	});
})();
