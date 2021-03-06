var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
    styles: [
                {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                  featureType: 'administrative.locality',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [{color: '#263c3f'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#6b9a76'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{color: '#38414e'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#212a37'}]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#9ca5b3'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{color: '#746855'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#1f2835'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#f3d19c'}]
                },
                {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [{color: '#2f3948'}]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#d59563'}]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#17263c'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#515c6d'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#17263c'}]
                }
              ]
            

  });
}

MapWrapper.prototype = {
  addMarker: function(coords, contentWurds) {
    var infoWindow = new google.maps.InfoWindow({
      content: contentWurds
    });
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });

   marker.addListener('click', function () {
     infoWindow.open(this.googleMap, marker);
   });
  },
  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event) {
      var latitude = event.latLng.lat();
      var longitude = event.latLng.lng();
      this.addMarker({lat: latitude, lng: longitude});
    }.bind(this));
  },
  centreMap: function(button, coords, zoom) {
      button.onclick = function() {
      this.googleMap.setCenter(coords);
      this.googleMap.setZoom(zoom);
    }.bind(this);
  },
  getCurrentLocation: function(button) {
    button.onclick = function() {
      navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {lat: position.coords.latitude, lng: position.coords.longitude};

      this.googleMap.setCenter(pos);
      this.googleMap.setZoom(9);
    }.bind(this));
  }.bind(this);

}
}


