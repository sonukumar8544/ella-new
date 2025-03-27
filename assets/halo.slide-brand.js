(function ($) {
	var halo = {
	    initBrandsSlider: function() {
	        var brandsSlider = $('[data-brands-slider]');

	        brandsSlider.each(function () {
	            var self = $(this),
	            	dataArrows = self.data('arrows'),
	            	dataDots = self.data('dots'),
					dataCenterMode = self.data('center-mode'),
					itemsToShow = parseInt(self.data('rows')),
					autoplay = self.data('autoplay'),
					autoplaySpeed = self.data('autoplay-speed'),
					itemTotal = self.find('.halo-item').length;

	            if (self.not('.slick-initialized')) {
	               self.slick({
    slidesToShow: itemsToShow,
    slidesToScroll: itemsToShow, // Ensure it scrolls fully
    dots: dataDots && itemTotal > itemsToShow,
    infinite: autoplay ? true : false, // Set explicitly
    speed: 800,
    nextArrow: window.arrows.icon_next,
    prevArrow: window.arrows.icon_prev,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    rtl: window.rtl_slick,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 4,
                arrows: dataArrows,
                dots: dataDots && itemTotal > 4
            }
        }
    ]
});

	            }
	        });
	    }
	}
	halo.initBrandsSlider();
	if ($('body').hasClass('cursor-fixed__show')){
		window.sharedFunctionsAnimation.onEnterButton();
		window.sharedFunctionsAnimation.onLeaveButton();
	}
})(jQuery);
