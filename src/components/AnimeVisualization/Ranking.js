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

const Ranking = ({data: { averageScore, meanScore, popularity, trending, favourites, rankings }}) => {

	return(
		<StyledInfo>
			<ul>
				{ averageScore != null ? 
					<li>
						Average Score: {averageScore >= 70 ? <span style={{ backgroundColor: 'green'}} className="data">{averageScore}</span> : <span style={{ backgroundColor: 'red'}} className="data">{averageScore}</span> }
					</li> : "" }


				{ meanScore != null ? 
					<li>
						Mean Score: {meanScore >= 70 ? <span style={{ backgroundColor: 'green'}} className="data">{meanScore}</span> : <span style={{ backgroundColor: 'red'}} className="data">{meanScore}</span> }
					</li> : "" }
				{ trending != null ? <li>Activity per hour: <span className="data">{trending}</span></li> : "" }
				{ popularity != null ? <li># of Times Saved by Users: <span className="data">{popularity}</span></li> : "" }
				{ favourites != null ? <li># of Users Favourited: <span className="data">{favourites}</span></li> : "" }
				
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