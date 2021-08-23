/*
   Abdiel L. Franco
   ICT-4510
   August 22, 2021
   Assignment Week #10: Moved this carousel script from the template to its own file
*/
  
$(document).ready(function() {

	var owl = $('.owl-carousel');
	owl.owlCarousel({
    	margin: 10,
        nav: true,
        loop: true,
    	responsive: {
        	0: {
            	items: 1
            },
            600: {
            	items: 2
            },
            1000: {
            	items: 5
            }
        }
    })
})