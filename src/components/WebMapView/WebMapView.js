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
	        	'esri/WebMap', 
	        	'esri/views/MapView',
	        	'esri/widgets/BasemapToggle',
	        	'esri/widgets/Track',
	        	'esri/layers/FeatureLayer',
	        ], { css: true })


	        .then(([WebMap, MapView, BasemapToggle, Track, FeatureLayer]) => {
				const map = new WebMap({
					basemap: 'dark-gray-vector',
				});

				// load the map view at the ref's DOM node
				const view = new MapView({
	            	container: mapRef.current,
		            map,
		            center: [53, 127],
		            zoom: 2,
	            });

	          // Toggle button
	            const basemapToggle = new BasemapToggle({
		          	view,
		          	nextBasemap: "streets-navigation-vector"
	            });
	            view.ui.add(basemapToggle,"bottom-right");

	            // Location tracking
	            const track = new Track({
	            	view,
	            	useHeadingEnabled: false,
					goToOverride: (view, options) => {
						options.target.scale = 1500;  // Override the default map scale
						return view.goTo(options.target);
					}
	            });
	            view.ui.add(track, "top-left");
	            view.when(() => { track.start() });

	            // Popup Table
	            const popupTable = {
	            	title: "{HA_Name}",
	            	content: [{
	            		type:"fields",
	            		"fieldInfos": [
		            		{
		            			fieldName: "Cases",
		            			label: "Total Cases",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			format: {
		            				"places": 2,
		            				digitSeparator: true
		            			},
		            			stringFieldOption: "text-box"
		            		},
		            		{
		            			fieldName: "NewCases",
		            			label: "New Cases",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			format: {
		            				"places": 2,
		            				digitSeparator: true
		            			},
		            			stringFieldOption: "text-box"
		            		},
		            		{
		            			fieldName: "Deaths",
		            			label: "Total Deaths",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			format: {
		            				"places": 2,
		            				digitSeparator: true
		            			},
		            			stringFieldOption: "text-box"
		            		},
		            		{
		            			fieldName: "Hospitalized",
		            			label: "Total Hospitalized",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			format: {
		            				"places": 2,
		            				digitSeparator: true
		            			},
		            			stringFieldOption: "text-box"
		            		},
		            		{
		            			fieldName: "Recovered",
		            			label: "Total Recovered",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			format: {
		            				"places": 2,
		            				digitSeparator: true
		            			},
		            			stringFieldOption: "text-box"
		            		},
		            		{
		            			fieldName: "CurrentlyHosp",
		            			label: "Currently Hospitalized",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			format: {
		            				"places": 2,
		            				digitSeparator: true
		            			},
		            			stringFieldOption: "text-box"
		            		},
		            		{
		            			fieldName: "CurrentlyICU",
		            			label: "Currently in ICU",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			format: {
		            				"places": 2,
		            				digitSeparator: true
		            			},
		            			stringFieldOption: "text-box"
		            		},
		            		{
		            			fieldName: "HA_Pop20",
		            			label: "Population",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			format: {
		            				"places": 2,
		            				digitSeparator: true
		            			},
		            			stringFieldOption: "text-box"
		            		},
		            		{
		            			fieldName: "Date_Updat",
		            			label: "Last Updated",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			stringFieldOption: "text-box"
		            		},
	            		]
	            	}]
	            }

	            // FeatureLayer - CovidCases BC
	            const CovidCasesLayer = new FeatureLayer({
	            	url: "https://services1.arcgis.com/xeMpV7tU1t4KD3Ei/ArcGIS/rest/services/COVID19_Cases_by_BC_Health_Authority/FeatureServer/0",
	            	outFields: ["HA_Name", "Cases", "NewCases", "Deaths", "Recovered","Hospitalized", "CurrentlyHosp", "CurrentlyICU", "HA_Pop20", "Date_Updat"],
	            	popupTemplate: popupTable
	            });
	            map.add(CovidCasesLayer, 0);


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
	    	<h3 style={{ fontSize: '32px', fontWeight: '500', paddingLeft: '3rem'}}>COVID19 Cases in British Columbia, Canada</h3>
	    	<div className="webmap" ref={mapRef} style={{ height: '80vh', width: 'auto', margin: '0', padding: '0'}} />
    	</>
    );
};

export default WebMapView;