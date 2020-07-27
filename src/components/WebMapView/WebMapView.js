// ArcGIS modules
import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
	        	'dijit/form/ToggleButton',
	        	'esri/layers/ImageryLayer',
	        	'esri/layers/TileLayer'
	        ], { css: true })


	        .then(([WebMap, MapView, BasemapToggle, Locate, FeatureLayer, Feature, Graphic, ToggleButton, ImageryLayer, TileLayer]) => {
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
		            			fieldName: "Incident_Rate",
		            			label: "Incident Rate",
		            			isEditable: true,
		            			tooltip: "",
		            			visible: true,
		            			format: {
		            				places: 2,
		            				digitSeparator: true,
		            			},
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

	        	// const CovidCasesLayer_Renderer = {
	        	// 	type: "simple",
	        	// 	symbol: {
	        	// 		type: "picture-marker",
	        	// 		"url": "http://static.arcgis.com/images/Symbols/Basic/esriCrimeMarker_86.png",
	        	// 		"width": "15px",
	        	// 		"height": "15px",
	        	// 	}
	        	// }

	            // const CovidCasesLayer = new FeatureLayer({
	            // 	url: "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1/query?outFields=*&where=1%3D1",
	            // 	outFields: ['*'],
	            // 	popupTemplate: popupTable,
	            // 	renderer: CovidCasesLayer_Renderer,
	            // });
	            // map.add(CovidCasesLayer, 0);
	            // CovidCasesLayer.visible = false;

	            
	            const Covidmap = new FeatureLayer({
	            	url: "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/1",
	            	outFields: ['*'],
	            	popupTemplate: popupTable,
	            });
	            map.add(Covidmap, 0);


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

					// Popup highlights on mouseover
					view.whenLayerView(Covidmap).then((layerView) => {
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
					view.whenLayerView(CanadaTestingLayer).then((layerView) => {
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
					view.whenLayerView(USTestingLayer).then((layerView) => {
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

		        // Testing FeatureLayers
		        const CanadaTestingLayer = new FeatureLayer({
		        	url: 'https://services1.arcgis.com/B6yKvIZqzuOr0jBR/arcgis/rest/services/COVID19_Testing_Centres_in_Canada/FeatureServer/0/query?outFields=*&where=1%3D1',
		        	outFields: ['*'],
		        	popupTemplate: {
		        		title: "COVID19 Testing Centers",
		        		content: "{USER_Name}<br><br><b>Address:</b> {USER_Street}, {USER_PostalCode}<br><br><b>Phone:</b> {USER_Phone}"
		        	},
		        	renderer: {
			        	type: "simple",
		        		symbol: {
		        			type: "picture-marker",
		        			"url": "http://static.arcgis.com/images/Symbols/Animated/ConstantWhiteStrobeMarkerSymbol.png",
		        			"width": "15px",
		        			"height": "15px",
		        		}
		        	}
		        });
		        map.add(CanadaTestingLayer, 0);
		        CanadaTestingLayer.visible = false;

		        const USTestingLayer = new FeatureLayer({
		        	url: 'https://services.arcgis.com/8ZpVMShClf8U8dae/arcgis/rest/services/TestingLocations_public2/FeatureServer/0/query?outFields=*&where=1%3D1',
		        	outFields: ['*'],
		        	popupTemplate: {
		        		title: "COVID19 Testing Centers",
		        		content: "{name}<br><br><b>Address:</b> {fulladdr}<br><br><b>Phone:</b> {phone}"
		        	},
		        	renderer: {
			        	type: "simple",
		        		symbol: {
		        			type: "picture-marker",
		        			"url": "http://static.arcgis.com/images/Symbols/Animated/ConstantWhiteStrobeMarkerSymbol.png",
		        			"width": "15px",
		        			"height": "15px",
		        		}
		        	},

		        });
		        map.add(USTestingLayer, 0);
		        USTestingLayer.visible = false;

		        // Senior Population
		        const SeniorPopLayer = new TileLayer({
		        	url: 'https://tiles.arcgis.com/tiles/4yjifSiIG17X0gW4/arcgis/rest/services/Senior_Population_Global_Dataset/MapServer',
		        });
		        map.add(SeniorPopLayer, 0);
		        SeniorPopLayer.visible = false;


		     	// Population Density
		     	const PopDensity = new TileLayer({
		     		url: 'https://tiles.arcgis.com/tiles/RNiAyqyRLBta0YpY/arcgis/rest/services/Analyzing_Demographcs_Density/MapServer',
		     	});
		     	map.add(PopDensity, 0);
		     	PopDensity.visible = false;



		        // Filter
		        const sqlExpressions = ["Confirmed > 0" , "Deaths > 1000", "Active > 500"];
		        const selectFilter = document.createElement("select");
		        selectFilter.setAttribute("class", "esri-widget esri-select");
     			selectFilter.setAttribute("style", "width: 275px; font-family: Avenir Next W00; font-size: 1em;");

				sqlExpressions.forEach((sql) => {
					const option = document.createElement("option");
					option.value = sql;
					option.innerHTML = sql;
					selectFilter.appendChild(option);
				});
				view.ui.add(selectFilter, "top-right");

				//*************************************

				selectFilter.addEventListener('change', (event) => {
					setFeatureLayerViewFilter(event.target.value);
				});

				const setFeatureLayerViewFilter = (expression) => {
					view.whenLayerView(Covidmap).then((featureLayerView) => {
						featureLayerView.filter = {
							where: expression
						};
					});
				}



				//Buttons
				document.getElementById("toggleTestingCenters").innerHTML = "Toggle Testing Centers (CAN/US)";
				var TestingCenters = true;
				const ToggleTestingCenter = () => {
					TestingCenters = !TestingCenters;
					CanadaTestingLayer.visible = !TestingCenters;
					USTestingLayer.visible = !TestingCenters;
					console.log(TestingCenters);
				}
				document.getElementById("toggleTestingCenters").addEventListener("click", ToggleTestingCenter);


				document.getElementById("toggleCases").innerHTML = "Toggle Cases";
				var Cases = false;
				const ToggleCase = () => {
					Cases = !Cases;
					Covidmap.visible = !Cases;
				}
				document.getElementById("toggleCases").addEventListener("click", ToggleCase);


				document.getElementById("toggleSenior").innerHTML = "Toggle Senior Population";
				var Seniors = true;
				const ToggleSenior = () => {
					Seniors = !Seniors;
					SeniorPopLayer.visible = !Seniors;
				}
				document.getElementById("toggleSenior").addEventListener("click", ToggleSenior);

				document.getElementById("togglePopDensity").innerHTML = "Toggle Population Density";
				var Density = true;
				const ToggleDensity = () => {
					Density = !Density;
					PopDensity.visible = !Density;
				}
				document.getElementById("togglePopDensity").addEventListener("click", ToggleDensity);

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
	    	<h3 style={{ fontSize: '32px', fontWeight: '500', paddingLeft: '3rem', textAlign: 'center'}}>2020 Pandemic</h3>
	    	<div className="map-container">
	    		<Grid container>
	    			<Grid item xs={12}>
			    		<Button id="toggleTestingCenters" variant="contained" size="small" color="default"></Button>
			    		<Button id="toggleCases" variant="contained" size="small" color="default"></Button>
			    		<Button id="toggleSenior" variant="contained" size="small" color="default"></Button>
			    		<Button id="togglePopDensity" variant="contained" size="small" color="default"></Button>
		    		</Grid>

				    <Grid item md={9} xs={12}>
				    	<div className="webmap" ref={mapRef} style={{ height: '80vh', width: 'auto', margin: '0', padding: '0'}} />
				    </Grid>
		    		<Grid item xs>
				    	<div id="feature-node" style={{ float: 'right', height: '80vh', width: '100%', paddingLeft: '1em', paddingRight: '1em'}}></div>
				    </Grid>

				</Grid>
			</div>
    	</>
    );
};

export default WebMapView;