
// Initialize Smooth Scroll

var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1500, // Integer. How fast to complete the scroll in milliseconds
	offset: 50, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {}, // Function. Custom easing pattern
});
