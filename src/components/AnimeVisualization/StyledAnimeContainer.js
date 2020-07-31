import styled from 'styled-components';

const StyledContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: #fff;

	.searchbar {
		text-align:center;

		.searchbox {
			padding: 15px;
			margin: 2rem;
			width: 50%;
		    appearance: none;
		    background: none;
		    border: none;
		    outline: none;
		    background-color: rgba(136, 132, 216, 0.2);
			border-radius: 16px 16px 16px 16px;
			margin-top: -25px;
			box-shadow: 0px 5px rgba(0, 0, 0, 0.2);
			color: #313131;
   			font-size: 20px;
		}
	}

	.viz-container {
		text-align: center;
		padding: 1em;
		width: 100%;
	}
	.bannerImg {
		width: 100%;
		height: 20vh;
		object-fit: cover;
	}
`;

export default StyledContainer;