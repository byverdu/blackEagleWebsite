
var google;

https://www.google.co.uk/maps/place/16+Arthur+St,+Gravesend+DA11+0PP/@51.4385789,0.3663438,17z/data=!4m13!1m7!3m6!1s0x47d8b6050a92d441:0x47be78a86d2d13a6!2s16+Arthur+St,+Gravesend+DA11+0PP!3b1!8m2!3d51.4383985!4d0.3658047!3m4!1s0x47d8b6050a92d441:0x47be78a86d2d13a6!8m2!3d51.4383985!4d0.3658047

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(51.4385789, 0.3663438);
    // var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
    // 39.399872
    // -8.224454

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map.
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };



    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var addresses = ['16 Arthur St, Gravesend DA11 0PP'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x], null, function (data) {
          console.log(data);
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(51.4385789, 0.3663438);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/map_icon.png'
            });

        });
    }

}
google.maps.event.addDomListener(window, 'load', init);
