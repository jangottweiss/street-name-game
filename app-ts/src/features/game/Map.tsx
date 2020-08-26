import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mapboxgl from 'mapbox-gl';

const MAPBOX_API_KEY =`${process.env.REACT_APP_MAPBOX_API_KEY}`
mapboxgl.accessToken =  MAPBOX_API_KEY || '';

export function Map() {
    const [latLngZoom, setLatLngZoom] = useState({ lng: 5, lat: 34, zoom: 1.5 });
    const mapContainer = useRef(null);

    // Initialization.
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current || '',
            style: "mapbox://styles/mapbox/streets-v9",
            center: [5, 34],
            zoom: 1.5
        });

        map.on("move", () => {
            const { lng, lat } = map.getCenter();
            setLatLngZoom({
                lng: parseFloat(lng.toFixed(4)),
                lat: parseFloat(lat.toFixed(4)),
                zoom: parseFloat(map.getZoom().toFixed(2))
            });
        });

        return function cleanup() {
            map.remove();
        };
    }, []);

    const { lng, lat, zoom } = latLngZoom;
    return (
        <div>
            <>
                <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
                    <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
                </div>
                <div ref={mapContainer} className="absolute top right left bottom" />
            </>
        </div>
    );
}
