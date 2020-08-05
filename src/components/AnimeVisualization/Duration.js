import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
	ul {
		list-style: none;
		text-align: left;
		margin: 0;
		padding: 1em;
	}

	img {
		padding: 1rem;
		max-width: 100%;
		height: auto;
		margin: auto;
		display: block;
	}

`;

const Duration = ({data: { episodes, duration, chapters, volumes }}) => {

	return(
		<StyledInfo>
			<ul>
				{ episodes != null ? <li>Episodes: {episodes}</li> : "" }
				{ duration != null ? <li>Length of Episode: {duration} min</li> : "" }
				{ chapters != null ? <li>Chapters: {chapters}</li> : "" }
				{ volumes != null ? <li>Volumes: {volumes}</li> : "" }
			</ul>
		</StyledInfo>
	);
}

export default Duration;