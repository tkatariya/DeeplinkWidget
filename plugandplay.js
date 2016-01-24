$(document).ready(function(){
	
	var flightImgUrl = 'http://wallpapershacker.com/wallpaper/airplanes_liftoff_scandinavian_airlines_hd-wallpaper-1036118.jpg';
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
    
    $('input[data-toggle="tooltip"]').tooltip({
				delay: 500,
				trigger: 'hover',
				placement:'top'				
    });
				
    $('.datepicker').datetimepicker({
        format: 'MM/DD/YYYY',
        minDate: moment(1, 'h')
    });
			
			$('.timepicker').datetimepicker({
				format: 'LT'
			});
			
	
});
