import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const StyledBannerText = styled.div`
	.banner-text {
		text-align: center;
		font-size: 7vw;
		font-weight: 900;

		.text {
			padding: 0;
			margin: 0;
			background: linear-gradient(to right, #4d73e6 0%, #8a56e9 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
`;

const BannerText = () => {
	const [ count, setCount ] = useState(1);

	useEffect(() => {
		setCount(1);
	}, [count]);

	return(
		<StyledBannerText>
			<div className="banner-text">
				<span className="text" style={{ 'whiteSpace': 'nobreak'}}>
						Visualize
				</span>

				{ count ? (
					<Typist avgTypingDelay={80} onTypingDone={() => setCount(0)}>
						<span className="text">data.</span>
						<Typist.Backspace count={8} delay={900} />
						<span className="text">change.</span>
						<Typist.Backspace count={8} delay={900} />
						<span className="text">the world.</span>
						<Typist.Backspace count={8} delay={900} />
					</Typist>
				): "" }
			</div>
		</StyledBannerText>
	);
}

export default BannerText;