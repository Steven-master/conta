jQuery(function ($) {
    // Google Maps setup
    var googlemap = new google.maps.Map(
        document.getElementById('googlemap'),
        {
            center: new google.maps.LatLng(14.496756, -90.705087),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    );
});