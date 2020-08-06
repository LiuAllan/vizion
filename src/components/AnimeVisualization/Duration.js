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
	.data {
		background-color: #f5f8fa;
		border-radius: 10px;
		padding: 0.5px 5px 0.5px 5px;
	}

`;

const Duration = ({data: { episodes, duration, chapters, volumes }}) => {

	return(
		<StyledInfo>
			<ul>
				{ episodes != null ? <li>Episodes: <span className="data">{episodes}</span></li> : <li>Episodes: <span className="data">None</span></li> }
				{ duration != null ? <li>Length of Episode: <span className="data">{duration} min</span></li> : <li>Length of Episode: <span className="data">None</span></li> }
				{ chapters != null ? <li>Chapters: <span className="data">{chapters}</span></li> : <li>Chapters: <span className="data">None</span></li> }
				{ volumes != null ? <li>Volumes: <span className="data">{volumes}</span></li> : <li>Volumes: <span className="data">None</span></li> }
			</ul>
		</StyledInfo>
	);
}

export default Duration;