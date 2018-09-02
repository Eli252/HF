/*global google*/
(function(){
    'use strict';

    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 31.7683, lng: 35.2137},
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);


    //dosen't work as intended, but it's a try
    localStorage.shapes = [];

    google.maps.addListener(drawingManager, 'overlaycomplete', event => {
        if(event.type === 'marker'){
            localStorage.shapes.push(JSON.stringify({type: 'marker' ,lat: event.overlay.position.lat(), lng: event.overlay.position.lng()}));
        } else if(event.type === 'circle'){
            localStorage.shapes.push(JSON.stringify({type: 'circle' ,lat: event.overlay.center.lat(), lng: event.overlay.center.lng(), radius: event.overlay.radius()}));
        } else if(event.type === 'rectangle'){
            localStorage.shapes.push(JSON.stringify({type: 'rectangle' ,b: event.overlay.bounds.b(), f: event.overlay.bounds.f()}));
        } 
    });

    if(localStorage.shapes.length > 0){
        localStorage.shapes.array.forEach(shape => {
            if(shape.type === 'marker'){
                const loc = JSON.parse(shape);
                new google.maps.Marker({
                    position: { lat: loc.lat, lng: loc.lng },
                    map: map
                });
            } else if(shape.type === 'circle'){
                const loc = JSON.parse(shape);
                new google.maps.Circle({
                    center: { lat: loc.lat, lng: loc.lng },
                    radius: loc.radius,
                    map: map
                });
            } else if(shape.type === 'rectangle'){
                const loc = JSON.parse(shape);
                new google.maps.Rectangle({
                    bounds: { b: loc.b, f: loc.f },
                    map: map
                });
            }
        });
    }
}());