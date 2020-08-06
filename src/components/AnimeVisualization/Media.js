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

const Media = ({data: { type, format, status, startDate, tags }}) => {
	const tagsArray = [];
	tags.map(tag => {
		tagsArray.push(`${tag.category}, `)
	});
	
	return(
		<StyledInfo>
			<ul>
				{ type != null ? <li>Media Type: <span className="data">{type}</span></li> : "" }
				{ format != null ? <li>Media Format: <span className="data">{format}</span></li> : "" }
				{ status != null ? <li>Status: <span className="data">{status}</span></li> : "" }
				{ startDate != null ? <li>Release Date: <span className="data">{startDate.day}/{startDate.month}/{startDate.year}</span></li> : "" }
				<h5>Keywords</h5>
				<li>{tagsArray}</li>
			</ul>
		</StyledInfo>
	);
}

export default Media;