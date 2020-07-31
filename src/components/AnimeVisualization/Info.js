import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';

const StyledInfo = styled.div`
	ul {
		list-style: none;
		text-align: left;
		margin: 0;
		padding: 0;

		.paper {
			padding: 1em;
		}

	}

	img {
		padding: 1rem;
		max-width: 100%;
		height: auto;
		margin: auto;
		display: block;
	}

`;

const Info = ({data: { title, tags, rankings, coverImage }}) => {
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
				<Paper elevation={2} className="paper">
					{ title.english != null ? <li>English: {title.english}</li> : "" }
					{ title.romaji != null ? <li>Romaji: {title.romaji}</li> : "" }
					{ title.native != null ? <li>Native: {title.native}</li> : "" }
					
					<img src={coverImage.large} alt="" />
				</Paper>


				<Paper elevation={2} className="paper">
					<h5>Types</h5>
					<li>{tagsArray}</li>
				</Paper>

				<Paper elevation={2} className="paper">
					<h5>Rankings</h5>
					{
						rankings.map((ranking, index) => (
							<li key={index}>{ranking.context} { ranking.year === null ? "" : `- ${ranking.year}`}</li>
						))
					}
				</Paper>
			</ul>
		</StyledInfo>
	);
}

export default Info;