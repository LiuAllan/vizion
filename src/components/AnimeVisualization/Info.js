import React from 'react';
import styled from 'styled-components';
// import Card from '@material-ui/core/Card';
// import Paper from '@material-ui/core/Paper';

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

const Info = ({data: { title, tags, rankings, coverImage, averageScore, type, status, episodes, chapters }}) => {
	// console.log(title);
	return(
		<StyledInfo>
			<ul>

				{ title.english != null ? <li>English: {title.english}</li> : "" }
				{ title.romaji != null ? <li>Romaji: {title.romaji}</li> : "" }
				{ title.native != null ? <li>Native: {title.native}</li> : "" }
				<img src={coverImage.large} alt="" />
			</ul>
		</StyledInfo>
	);
}

export default Info;