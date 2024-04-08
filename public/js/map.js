mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12',
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 5 // starting zoom
});

// const coordinate = [78.4439, 17.5626]; // Assuming coordinates is in the format [lng, lat]

const marker = new mapboxgl.Marker({color:"red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${listing.location}</h3><p>Exact Location provides after booking</p>`
            )
    )
    .addTo(map);
