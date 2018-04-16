
// initialize the configuration of map
function initMap() {
  
    // create an object to store lat/lng data
    var monksLocation = {
      lat: 40.8054491,
      lng: -73.9654415
    };

    // create a new instance of a map
    // configure map with options object
    var map = new google.maps.Map(document.getElementById("mapSection"), {
      center: monksLocation,
      zoom: 10,
    });
  
   var marker = new google.maps.Marker( {
      position: monksLocation,
      map: map,
      title: "Monk's Diner"
    });
  };


initMap();