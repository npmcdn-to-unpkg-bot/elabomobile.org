(function($) {
  function draw_map(container) {
    var map = L.map(container, {
      dragging: false,
      touchZoom: false,
      zoomControl: false,
      scrollWheelZoom: false
    }).setView([43.49420, -1.46671], 15);
    L.tileLayer('http://otile2.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18}).addTo(map); 
  }

  $(document).ready(function() {
    draw_map('map_container');
  });
})(jQuery);
