import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import WebMapView from '../components/WebMapView/WebMapView';

const Pandemic = () => {

	return(
		<>
			<Navbar />
			<WebMapView />
			<Footer />
		</>
	);
}

export default Pandemic;