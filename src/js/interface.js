let apiInterface = (function() {
	let _info;

	$(document).ready(function() {
		$.ajax({
			dataType: "json",
			url: "http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&APPID=c5993645eb5b6cce82ef23a6babf121a",
			success: function(response) {
				_info = response;
			}
		});
	});

	let apiInterface = {};
	return apiInterface;
})();
