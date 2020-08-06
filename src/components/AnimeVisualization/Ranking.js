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

const Ranking = ({data: { averageScore, meanScore, popularity, trending, favourites, rankings }}) => {

	return(
		<StyledInfo>
			<ul>
				{ averageScore != null ? <li>Average Score: {averageScore}</li> : "" }
				{ meanScore != null ? <li>Mean Score: {meanScore}</li> : "" }
				{ trending != null ? <li>Activity per hour: {trending}</li> : "" }
				{ popularity != null ? <li># of Times Saved by Users: {popularity}</li> : "" }
				{ favourites != null ? <li># of Users Favourited: {favourites}</li> : "" }
				
				<h5>Ratings</h5>
				{
					rankings.map((ranking, index) => (
						<li key={index}>{ranking.context} { ranking.year === null ? "" : `- ${ranking.year}`}</li>
					))
				}
			</ul>
		</StyledInfo>
	);
}

export default Ranking;