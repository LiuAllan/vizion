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
	const tagsArray = [];
	tags.map(tag => {
		tagsArray.push(`${tag.category}, `)
	});

	// const rankingsArray = [];
	// rankings.map(ranking => {
	// 	rankingsArray.push(`${ranking.context} - ${ranking.year}, `)
	// });

	return(
		<StyledInfo>
			<ul>

				{ title.english != null ? <li>English: {title.english}</li> : "" }
				{ title.romaji != null ? <li>Romaji: {title.romaji}</li> : "" }
				{ title.native != null ? <li>Native: {title.native}</li> : "" }
				
				<img src={coverImage.large} alt="" />


				{/*
				{ averageScore != null ? <li>Average Score: {averageScore}</li> : "" }
				{ type != null ? <li>Media Type: {type}</li> : "" }
				{ status != null ? <li>Status: {status}</li> : "" }
				{ episodes != null ? <li>Total Episodes: {episodes}</li> : "" }
				{ chapters != null ? <li>Total Chapters: {chapters}</li> : "" }


				
				<h5>Types</h5>
				<li>{tagsArray}</li>



				<h5>Ratings</h5>
				{
					rankings.map((ranking, index) => (
						<li key={index}>{ranking.context} { ranking.year === null ? "" : `- ${ranking.year}`}</li>
					))
				}
				
				*/}
			</ul>
		</StyledInfo>
	);
}

export default Info;