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

const Media = ({data: { type, format, status, startDate, tags }}) => {
	const tagsArray = [];
	tags.map(tag => {
		tagsArray.push(`${tag.category}, `)
	});
	
	return(
		<StyledInfo>
			<ul>
				{ type != null ? <li>Media Type: {type}</li> : "" }
				{ format != null ? <li>Media Format: {format}</li> : "" }
				{ status != null ? <li>Status: {status}</li> : "" }
				{ startDate != null ? <li>Release Date: {startDate.day}/{startDate.month}/{startDate.year}</li> : "" }
				<h5>Types</h5>
				<li>{tagsArray}</li>
			</ul>
		</StyledInfo>
	);
}

export default Media;