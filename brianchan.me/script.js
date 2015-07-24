// adds link to larger images for all images within a div row 
// gets the source of the image
// adds link to image source on that image
// $('.java-assignments img').wrap('<a href=' + $('.row img').attr('src') + '></a>'); 

// adds target=_blank to all external links
$('a[href^="http"]').attr({ 
	target: "_blank" 
});

// add target=_blank to web design projects
$('.web-design a').attr({ 
	target: "_blank" 
});

// makes all images in a row div responsive
$('.row img').attr({
	class: "img-responsive",
});