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
				{ episodes != null ? <li>Episodes: {episodes}</li> : <li>Episodes: None</li> }
				{ duration != null ? <li>Length of Episode: {duration} min</li> : <li>Length of Episode: None</li> }
				{ chapters != null ? <li>Chapters: {chapters}</li> : <li>Chapters: None</li> }
				{ volumes != null ? <li>Volumes: {volumes}</li> : <li>Volumes: None</li> }
			</ul>
		</StyledInfo>
	);
}

export default Duration;