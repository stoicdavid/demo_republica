$(document).ready(function() {
	$(".mapa").panzoom({
	    $zoomIn: $(".zoom-in"),
	    $zoomOut: $(".zoom-out"),
	    $zoomRange: $(".zoom-range"),
	    $reset: $(".reset"),
	    startTransform: 'pan(57,57)',
	    increment: 0.5,
	    minScale: 0.000005,
    }).panzoom('zoom');

  });
