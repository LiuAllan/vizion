// ArcGIS modules
import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

// Widgets
window.dojoConfig = {
  async: true,
  packages: [
    {
      name: "react",
      location: "https://unpkg.com/react@16/umd/",
      main: "react.production.min"
    },
    {
      name: "react-dom",
      location: "https://unpkg.com/react-dom@16/umd/",
      main: "react-dom.production.min"
    }
  ]
};


const WebMapView = () => {
    const mapRef = useRef();

    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules([
        	'esri/Map', 
        	'esri/views/MapView',
        	'esri/widgets/BasemapGallery',
        ], { css: true })


        .then(([ArcGISMap, MapView, BasemapGallery]) => {
          const map = new ArcGISMap({
            basemap: 'dark-gray-vector'
          });

          // load the map view at the ref's DOM node
          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-118, 34],
            zoom: 13
          });

          // Toggle button
          const basemapGallery = new BasemapGallery({
          	view,
          	source: {
          		portal: {
          			url: "https://www.arcgis.com",
          			useVectorBasemaps: true,
          		}
          	}
          });
          view.ui.add(basemapGallery,"bottom-right");

          return () => {
            if (view) {
              // destroy the map view
              view.container = null;
            }
          };


        });
      }
    );

    return (
    	<>
	    	<h3>2020 Pandemic Virus Spread</h3>
	    	<div className="webmap" ref={mapRef} style={{ height: '75vh', width: 'auto', margin: '0', padding: '0'}} />
    	</>
    );
};

export default WebMapView;