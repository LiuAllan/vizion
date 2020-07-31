import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
	ul {
		list-style: none;
		text-align: left;
	}

`;

const Info = ({data: { title, tags, rankings }}) => {
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
				

				<h5>Tags</h5>
				<li>{tagsArray}</li>

				<h5>Rankings</h5>
				{
					rankings.map(ranking => (
						<li>{ranking.context} { ranking.year === null ? "," : `- ${ranking.year},`}</li>
					))
				}
			</ul>
		</StyledInfo>
	);
}

export default Info;