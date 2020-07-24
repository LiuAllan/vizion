import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AnimeVisualization from '../components/AnimeVisualization/AnimeVisualization';
import Footer from '../components/Footer/Footer';

const Anime = () => {

	return(
		<>
			<Navbar />
			<AnimeVisualization />
			<Footer />
		</>
	);
}

export default Anime;