$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});

$( document ).on('turbolinks:load', function() {
  $('#map').ImageViewer(
  {
	  zoomValue:(210)
	
  });
})

$( document ).on('turbolinks:load', function() {

	var myElement = document.getElementById('map');

	// create a simple instance
	// by default, it only adds horizontal recognizers
	var mc = new Hammer(myElement);

	// let the pan gesture support all directions.
	// this will block the vertical scrolling on a touch-device while on the element
	mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

	// listen to events...
	mc.on("panleft panright panup pandown tap press", function(ev) {
	    console.log(ev);
	});
})