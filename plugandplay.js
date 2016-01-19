$(document).ready(function(){
	
	var flightImgUrl = 'http://gallsource.com/wp-content/uploads/2014/08/Aircraft-Height-Sky-Wings-Clouds-05E-Down-Beautiful-HD-Wallpapers.jpg';
	var hotelsImgUrl = 'http://www.thewallpapers.org/photo/30446/luxury-hotel-concept.jpg';
	var carsImgUrl = 'http://www.shortday.in/wp-content/uploads/2015/05/Car-hd-wallpapers.jpg';
	var activityImgUrl = 'http://wallpapercave.com/wp/dcQv50O.jpg';
	var packagesImgUrl = 'http://www.tripdesigners.co/wp-content/uploads/2015/10/water-surfing-amazing-hd-desktop-wallpapers-for-background.jpg';
	
	
	$('.flightsTab').click(function(){
		$('body').css('background-image',"url("+flightImgUrl+")" );
	});
	
	$('.hotelsTab').click(function(){
		$('body').css('background-image',"url("+hotelsImgUrl+")" );
	});
	
	$('.carsTab').click(function(){
		$('body').css('background-image',"url("+carsImgUrl+")" );
	});
	
	$('.activityTab').click(function(){
		$('body').css('background-image',"url("+activityImgUrl+")" );
	});
	
	$('.packagesTab').click(function(){
		$('body').css('background-image',"url("+packagesImgUrl+")" );
	});
	
	
	
	
	
	
});