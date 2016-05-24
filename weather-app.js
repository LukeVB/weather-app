var weatherWidget = {
};

weatherWidget.apiURL = 'http://api.wunderground.com/api/ca51099d6996798e/conditions/q/CA/San_Francisco.json';

console.log(weatherWidget);

weatherWidget.init = function() {
	weatherWidget.getData();
	//the code in here is used to initialize our application.
};

//When the page loads, we need to get some data.
//Make an AJAX call to the wundergrounds API
weatherWidget.getData = function() {
	$.ajax({
		url: weatherWidget.apiURL,
		method: 'GET',
		dataType: 'json'
	})
	.then(function(weatherData) {
		console.log(weatherData.current_observation);
		var observation = weatherData.current_observation;
		weatherWidget.displayWeather(observation);
	});
};

weatherWidget.displayWeather = function(weather) {
	console.log(weather);
	var city = weather.display_location.city;
	console.log(city);
	$('.city_name').text(city);
	var temp = weather.temp_c;
	console.log(temp);
	$('.temp_c').text(temp);
	var time = weather.local_time_rfc822;
	console.log(time);
	$('.date_time').text(time);
	var condition = weather.weather;
	console.log(condition);
	$('.weather_string').text(condition);
	var icon = weather.icon_url;
	console.log(icon);
	$('.weather_image').attr('src',icon);
};


// weatherWidget.displayWeather = function() {
// $(.weather_widget).html('<span class = 'weather_string'> + data.current_observation.dewpoint_c + '</span>')
// //Make an AJAX call to the wundergrounds API

// //when the data returns, we want to display specific things.
// //We want to display all the placeholders in our HTML document.


$(document).ready(function(){
  weatherWidget.init();
});