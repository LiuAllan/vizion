import React from 'react';
import styled from 'styled-components';
//images
import laptop from '../../images/laptop_viz.png';

const StyledMainInformation = styled.div`
	background-color: #fff;

	.main-information {
		margin: 0px;
		padding-top: 5rem;
		height: 100vh;
		width: 100%;
	}

	.main-information-container
	{
		text-align: center;

		h3 {
			font-weight: 500;
			font-size: 24px;
		}
	}
`;

const MainInformation = () => {
	return (
		<StyledMainInformation>
			<section className="main-information" id="main-information">
				<div className="main-information-container">
					<h3>Detect patterns, trends, and outliers.</h3>
					<img src={laptop} alt="" style={{height: 'auto', 'maxWidth': '50%'}}/>
				</div>
			</section>
		</StyledMainInformation>
	);
}

export default MainInformation;