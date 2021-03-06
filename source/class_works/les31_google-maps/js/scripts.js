
let map, marker, infoWindow, geocoder;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 47.095909, lng: 37.546490},
        zoom: 16,
        // mapTypeId: 'satellite'
    });

    marker = new google.maps.Marker({
        position: {lat: 47.095909, lng: 37.546490},
        map: map,
        icon: {
            url: 'img/marker.png',
            scaledSize: new google.maps.Size(64,64)
        },
        title: 'Beetroot',
        animation: google.maps.Animation.DROP,
    });

    infoWindow = new google.maps.InfoWindow({
        content: '<h3>Test maps API</h3>',

    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    geocoder = new google.maps.Geocoder();

    initSelect();
}

function initSelect (){
    'use strict';

    let select = document.querySelector('.cities');
    let address = select.value;
    // console.log(address);

    geoCode(address);

    select.addEventListener('change', (e)=>{
        let address = e.currentTarget.value;

        // console.log(address);
        geoCode(address);
    });
}


function geoCode(address){
    geocoder.geocode( { 'address': address}, function(results, status) {
        // console.log(JSON.stringify(results) + " : " + status);
        // console.log(results);
        if (status == 'OK') {
            let latLng = results[0].geometry.location;
            let image = document
            .querySelector(`[value="${address}"]`)
            .getAttribute('data-img');

            map.setCenter(latLng);
            marker.setPosition(latLng);
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(()=>{
                marker.setAnimation(null);
            }, 1800);
            marker.setIcon({
                url: `img/${image}`,
                scaledSize: new google.maps.Size(64,64)
            });

            // console.log(image);

            infoWindow.setContent(`
            <div class="popup">
                <img 
                    src="https://beetroot.academy/wp-content/uploads/${image}" alt="${address}" 
                    width="500">
                <span class="popup__address">${address}</span>
            </div>
            `);

            infoWindow.open(map, marker);

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
