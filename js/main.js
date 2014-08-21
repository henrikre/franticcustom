var navigation = $('.navigation');

/* Listen mobile menu button and display/hide the navigation */
$('a.menu-button').on('click tap', function(){
	if(navigation.hasClass('active')){
		navigation.animate({height: 0}, 200).removeClass('active').addClass('hidden');
	} else {
		navigation.animate({height: '144px'}, 200).addClass('active').removeClass('hidden');
	}
});

/* Hide the navigation when a link is clicked if in mobile view */
navigation.find('a').on('click', function(){
	if($('.menu-button').height() > 0){
		navigation.animate({height: 0}, 0).removeClass('active').addClass('hidden');
	}
});

$(window).resize(function() {
	if(navigation.width()>752){
		navigation.css('height', '100%').removeClass('hidden');
	} else {
		navigation.css('height', 0).removeClass('active').addClass('hidden');
	}
});

function initialize() {
	var myLatlng = new google.maps.LatLng(60.170486,24.932752);
	var mapOptions = {
		center: myLatlng,
		zoom: 15
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"),
		mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title:"Hello World!"
	});
	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);