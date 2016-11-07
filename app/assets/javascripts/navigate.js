$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});

$( document ).on('turbolinks:load', function() {
    FastClick.attach(document.body);
})

$('#map').on('turbolinks:load', function() {
	var overscroll = function(el) {
	  el.addEventListener('touchstart', function() {
	    var top = el.scrollTop
	      , totalScroll = el.scrollHeight
	      , currentScroll = top + el.offsetHeight
	    //If we're at the top or the bottom of the containers
	    //scroll, push up or down one pixel.
	    //
	    //this prevents the scroll from "passing through" to
	    //the body.
	    if(top === 0) {
	      el.scrollTop = 1
	    } else if(currentScroll === totalScroll) {
	      el.scrollTop = top - 1
	    }
	  })
	  el.addEventListener('touchmove', function(evt) {
	    //if the content is actually scrollable, i.e. the content is long enough
	    //that scrolling can occur
	    if(el.offsetHeight < el.scrollHeight)
	      evt._isScroller = true
	  })
	}
	overscroll(document.querySelector('.scroll'));
	document.body.addEventListener('touchmove', function(evt) {
	  //In this case, the default behavior is scrolling the body, which
	  //would result in an overflow.  Since we don't want that, we preventDefault.
	  if(!evt._isScroller) {
	    evt.preventDefault()
	  }
	})
})


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