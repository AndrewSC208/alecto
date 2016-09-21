$(document).ready(function() {
	var slides = $('.text-slider').find('.slide');
	var counter = initTextSlider(slides);

	function initTextSlider(slides) {
		$(slides[0]).addClass('display-slide');
		return 0;
	}

	function nextSlide() {
		$(slides[counter]).removeClass('display-slide');
		counter++;
		$(slides[counter]).addClass('display-slide');
		console.log("From nextSlide: " + counter);
	}

	function prevSlide() {
		$(slides[counter]).removeClass('display-slide');
		counter--;
		$(slides[counter]).addClass('display-slide');
		console.log("From nextSlide: " + counter);	
	}

	$('.next').click(function() {
		nextSlide();
	});
	
	$('.prev').click(function() {
		prevSlide();
	});

});



