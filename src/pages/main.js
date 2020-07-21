import React from 'react';
// Components
import Navbar from '../components/Navbar/Navbar';
import BannerText from '../components/BannerText/BannerText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MainInformation from '../components/MainInformation/MainInformation';
import Footer from '../components/Footer/Footer';
// Styles
import styled from 'styled-components';

const StyledBanner = styled.div`
	.banner {
		height: 75vh;
		width: 100%;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	// pop art
	.banner:after {
		content:'';
		position:absolute;
		background-color: #4d73e6;
		width: 100%;
		height: 100%;
		max-height: 30vw;
		right:0;
		z-index:-1;
		transform: translate(-50%, 65%) rotate(-45deg);
		border-radius:500px;
		opacity:0.25;
	}

	.arrow-center {
		text-align: center;

		a {
			color: #4d73e6;
			padding: 30px;
		}
		a:hover {
			color: #8a56e9;
		}

	}
`;


const main = () => {
	return(
		<>
			<Navbar />
			<StyledBanner>
				<section className="banner">
					<BannerText />
				</section>
				<div className="arrow-center">
					<a href="#main-information">
						<ExpandMoreIcon fontSize="large"/>
					</a>
				</div>
			</StyledBanner>

			<MainInformation />
			<Footer />
		</>
	);
}

export default main;