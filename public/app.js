var initialize = function() {
  var mapDiv = document.querySelector('#main-map');
  
  var center = {lat: 51.505234, lng: -0.123598};
  var fife = {lat: 56.270844, lng: -3.042330}
  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addMarker(center, "Fuck you javascript");

  var goToTheKingdom = document.querySelector('#kingdom');
  mainMap.centreMap(goToTheKingdom, fife, 8);

  var goToLondon = document.querySelector('#london');
  mainMap.centreMap(goToLondon, center, 10);

  var goToCurrentLocation = document.querySelector('#current-location');
  mainMap.getCurrentLocation(goToCurrentLocation);



  mainMap.addClickEvent();
   
}


window.onload = initialize;

