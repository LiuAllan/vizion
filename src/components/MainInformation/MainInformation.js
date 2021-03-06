import React, { useEffect }from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
//images
import laptop from '../../images/laptop_viz.png';
// Components
import VisibilityIcon from '@material-ui/icons/Visibility';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import Grid from '@material-ui/core/Grid';
import ScrollOut from 'scroll-out';


const StyledMainInformation = styled.div`
	background-color: #fff;

	.main-information {
		margin: 0px;
		padding-top: 5rem;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.main-information-container
	{
		height: 100%;
		text-align: center;

		h3 {
			font-weight: 500;
			font-size: 24px;
		}

		h4 {
			font-weight: 500;
		}

		.heading1, .heading2, .heading3 {
			height: 100%;
			margin-bottom: 3rem;
		}

	}

	[data-scroll] {
	  transition: opacity 1s;
	}
	[data-scroll="in"] {
	  opacity: 1;
	}
	[data-scroll="out"] {
	  opacity: 0;
	}

`;

const MainInformation = () => {

	useEffect(() => {
		Aos.init({
			duration: 1000,
			once: true,
			offset: 200
		});
		Aos.refresh();
		ScrollOut({
			once: true,
			threshold: 0.2,
		});
	});

	return (
		<StyledMainInformation>
			<section className="main-information" id="main-information">
				<div className="main-information-container">
					<div className="heading1">
						<h3 data-scroll>Detect patterns, trends, and outliers.</h3>
						<img src={laptop} alt="" style={{height: 'auto', 'maxWidth': '50%'}}/>
					</div>
					<div className="heading2">
						<h3 data-scroll>Make analytics easier to understand.</h3>
					</div>
					<Grid className="heading3" container justify="center">
						<Grid item md={3} className="icon1-container" data-aos="fade-up" data-aos-delay="300">
							<VisibilityIcon style={{color: '#8a56e9', fontSize: '3em'}}/>
							<h4>Without a visual representation, it can be hard for the audience to grasp the true meaning of the findings</h4>
						</Grid>
						<Grid item md={3} className="icon2-container" data-aos="fade-up" data-aos-delay="500">
							<DataUsageIcon style={{color: '#8a56e9', fontSize: '3em'}}/>
							<h4>With the rise of big data, we need to be able to interpret large batches of data</h4>
						</Grid>
					</Grid>
				</div>
			</section>
		</StyledMainInformation>
	);
}

export default MainInformation;