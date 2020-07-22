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
	        	'esri/widgets/Locate',
	        	'esri/layers/FeatureLayer',
	        	'esri/widgets/Feature',
	        	'esri/Graphic',
	        ], { css: true })


	        .then(([WebMap, MapView, BasemapToggle, Locate, FeatureLayer, Feature, Graphic]) => {
				const map = new WebMap({
					basemap: 'dark-gray-vector',
				});

				// load the map view at the ref's DOM node
				const view = new MapView({
	            	container: mapRef.current,
		            map,
		            center: [-118, 53],
		            zoom: 3,
		            popup: {
		            	autoOpenEnabled: false
		            }
	            });

	          // Toggle button
	            const basemapToggle = new BasemapToggle({
		          	view,
		          	nextBasemap: "streets-navigation-vector"
	            });
	            view.ui.add(basemapToggle,"bottom-right");

	            // Location tracking
	            const locate = new Locate({
	            	view,
	            	useHeadingEnabled: false,
					goToOverride: (view, options) => {
						options.target.scale = 1500;  // Override the default map scale
						return view.goTo(options.target);
					}
	            });
	            view.ui.add(locate, "top-left");

	            //PopupTable
            	const popupTable = {
            		title: "{Province_State}",
            		content: [{
            			type: "fields",
            			"fieldInfos": [
	            			{
		            			fieldName: "Country_Region",
		            			label: "Country",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			stringFieldOption: "text-box"
	            			},
	            			{
		            			fieldName: "Confirmed",
		            			label: "Confirmed Cases",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			stringFieldOption: "text-box"
	            			},
	            			{
		            			fieldName: "Recovered",
		            			label: "Recovered",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			stringFieldOption: "text-box"
	            			},
	            			{
		            			fieldName: "Deaths",
		            			label: "Deaths",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			stringFieldOption: "text-box"
	            			},
	            			{
		            			fieldName: "Active",
		            			label: "New Cases",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			stringFieldOption: "text-box"
	            			},
	            			{
		            			fieldName: "Last_Update",
		            			label: "Last Updated",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			stringFieldOption: "text-box"
	            			},
            			]
            		},
            		// Popup Graph
            		{
						type: "media",
		        			mediaInfos: [{
		        				type: "column-chart",
		        				caption: "Total Cases vs Total Recovered",
		        				value: {
		        					fields: ["Confirmed", "Recovered"],
		        					normalizeField: null,
		        					tooltipField: "Total Cases vs Patients Recovered"
		        				}
		        			}]
	        		}
            		]
	        	}

	            // FeatureLayer - CovidCases BC
	            const CovidCasesLayer = new FeatureLayer({
	            	url: "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1/query?outFields=*&where=1%3D1",
	            	outFields: ['*'],
	            	popupTemplate: popupTable
	            });
	            map.add(CovidCasesLayer, 0);

	            // Side panel
		        view.when().then(function () {
					// Create a default graphic for when the application starts
					const graphic = {
						popupTemplate: {
							content: "Mouse over features to show details..."
						}
					};

					// Provide graphic to a new instance of a Feature widget
					const feature = new Feature({
						container: "feature-node",
						graphic: graphic,
						map: view.map,
						spatialReference: view.spatialReference
					});

					view.whenLayerView(CovidCasesLayer).then((layerView) => {
						let highlight;
						// listen for the pointer-move event on the View
						view.on("pointer-move", (event) => {
							// Perform a hitTest on the View
							view.hitTest(event).then((event) => {
								// Make sure graphic has a popupTemplate
								let results = event.results.filter((result) => {
									return result.graphic.layer.popupTemplate;
								});
								let result = results[0];
								highlight && highlight.remove();
								// Update the graphic of the Feature widget
								// on pointer-move with the result
								if (result) {
									feature.graphic = result.graphic;
									highlight = layerView.highlight(result.graphic);
								} 
								else {
									feature.graphic = graphic;
								}
							});
						});
					});
		        });



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
	    	<h3 style={{ fontSize: '32px', fontWeight: '500', paddingLeft: '3rem'}}>2020 Pandemic</h3>
	    	<div id="feature-node" style={{ float: 'left', height: '100%', width: '20%', padding: '1em',}}></div>
	    	<div className="webmap" ref={mapRef} style={{ height: '80vh', width: 'auto', margin: '0', padding: '0'}} />
    	</>
    );
};

export default WebMapView;