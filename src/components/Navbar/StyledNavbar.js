import styled from 'styled-components';

const StyledNavbar = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
	height: 100%;
	width: 100%;
	background: rgba(255,255, 255, 0.6);
	margin: 0;
	padding: 0;

	.navbar-container {
		padding: 1.5rem;
		padding-left: 3rem;
		padding-right: 3rem;
	}

	.logo {
		padding: 0;
		margin: 0;

		//font
		background: linear-gradient(to right, #4d73e6 0%, #8a56e9 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 32px;
		font-weight: 900;
		font-family: 'Josefin Sans', sans-serif;
	}

	.links {
		width: 100%;
		float: right;
		margin: 0;
		padding: 0;
		list-style: none;

		li {
			float: right;
			padding: 10px;

			//font
			// background: linear-gradient(to right, #4d73e6 0%, #8a56e9 100%);
			background: black;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			font-size: 20px;
			font-weight: 900;
			// font-family: 'Josefin Sans', sans-serif;
			position: relative;
		}

		li a:after {    
		  background: none repeat scroll 0 0 transparent;
		  bottom: 0;
		  content: "";
		  display: block;
		  height: 2px;
		  left: 50%;
		  position: absolute;
		  background: linear-gradient(to right, #4d73e6 0%, #8a56e9 100%);
		  transition: width 0.3s ease 0s, left 0.3s ease 0s;
		  width: 0;
		}
		li a:hover:after { 
		  width: 100%; 
		  left: 0; 
		}
	}

`;

export default StyledNavbar;
