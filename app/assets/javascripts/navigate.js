$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});





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

var map = L.map('map').setView([70, 40], 2);

var bounds = [[-26.5,-25], [1021.5,1023]];

var mapSW = [0,2230];
var mapNE = [3030,0];



L.Icon.Default.imagePath = '/assets'
L.tileLayer('repugeo/{z}/{x}/{y}.png', {
    minZoom: 2,
    maxZoom: 4,
	continuosWorld:false,
	noWrap: true,
	crs: L.CRS.Simple,
    attribution: 'eMotion',

}).addTo(map);

map.setMaxBounds(new L.LatLngBounds(
	map.unproject(mapSW,map.getMaxZoom()),
	map.unproject(mapNE,map.getMaxZoom()),
	
));

var marker = L.marker([51.5, 20],{draggable:true}).addTo(map);
marker.bindPopup(marker.getLatLng().toString());
marker.on('dragend',function(e){
	marker.getPopup().setContent( marker.getLatLng().toString()).openOn(map);
});


var meridaMarker = L.icon({
    iconUrl: 'merida.tif',

    iconSize:     [88, 119], // size of the icon
    iconAnchor:   [60, 46.8], // point of the icon which will correspond to marker's location
    popupAnchor:  [-10, -50] // point from which the popup should open relative to the iconAnchor
});

var marker2 = L.marker([57.6, 47.5], {icon: meridaMarker}).addTo(map);
marker2.bindPopup("Merida");

var circle = L.circle([145, 175.2], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

})
