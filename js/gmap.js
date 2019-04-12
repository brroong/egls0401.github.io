var mapLocation = new google.maps.LatLng(37.501299, 127.037261); //change coordinates here
var marker;
var map;
function initialize() {
    var mapOptions = {
        zoom: 17, // Change zoom here
        center: mapLocation,
        scrollwheel: false,
        styles: [
            {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},
            {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
            {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},
            {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
            {"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#f6954d"}]},
            {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#e3e2e2"}]},
            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"water","elementType":"all","stylers":[{"color":"#a4c4c8"},{"visibility":"on"}]}]
    };
    
    map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
    
     
    //change address details here
    var contentString = '<div class="map-info">' 
    + '<div class="map-title">' 
    + '<div class="brand" href="#"><img alt="" src="images/logo_wb_bk.png"><div class="brand-info"><div class="brand-name">whitebrew</div><div class="brand-text">웹서비스 전문 개발사</div></div></div></div>' 
    + '<div class="map-address-row">'
    + '  <span class="text"><strong class="text-dark">강남구 역삼동 테헤란로 201</strong><br>'
    + '  아주빌딩 2층 스파크플러스 역삼점</span>'
    + '</div>'
    + '<div>'
    + '   <span class="text"><strong class="text-dark">Phone:</strong> +82 (70) 4066 1397</span>'
    + '</div>'
    + '<div class="map-address-row">'
    + '   <span class="map-email">'
    + '      <span class="text"><strong class="text-dark">Email:</strong> hello@whitebrew.com</span>'
    + '   </span>'
    + '</div>' 
    + '<p class="gmap-open"><a href="https://www.google.com/maps/place/%EC%8A%A4%ED%8C%8C%ED%81%AC%ED%94%8C%EB%9F%AC%EC%8A%A4+%EC%97%AD%EC%82%BC%EC%A0%90/@37.5013766,127.0363521,18z/data=!4m12!1m6!3m5!1s0x357ca3ff0220f31f:0x9e182993a28cf4c7!2z7Iqk7YyM7YGs7ZSM65-s7IqkIOyXreyCvOygkA!8m2!3d37.5012468!4d127.0371407!3m4!1s0x357ca3ff0220f31f:0x9e182993a28cf4c7!8m2!3d37.5012468!4d127.0371407" target="_blank">Open on Google Maps</a></p></div>';
    
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    

    // Uncomment down to show Marker
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Bauhaus', //change title here
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });



    // Uncomment down to show info window on marker
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });




}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}

