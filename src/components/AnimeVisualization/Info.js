import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Collapse } from '@material-ui/core';

const StyledInfo = styled.div`
	ul {
		list-style: none;
		text-align: left;
		margin: 0;
		padding: 1em;
	}

	img {
		padding-top: 1rem;
		padding-bottom: 1rem;
		max-width: 100%;
		height: auto;
		// margin: auto;
		display: block;
	}
	.data {
		background-color: #f5f8fa;
		border-radius: 10px;
		padding: 0.5px 5px 0.5px 5px;
	}

`;

const Info = ({data: { title, tags, rankings, coverImage, description }}) => {
	// console.log(title);

	const [open, setOpen] = useState(false);

	return(
		<StyledInfo>
			<ul>

				{ title.english != null ? <li>English: <span className="data">{title.english}</span></li> : "" }
				{ title.romaji != null ? <li>Romaji: <span className="data">{title.romaji}</span></li> : "" }
				{ title.native != null ? <li>Native: <span className="data">{title.native}</span></li> : "" }
				<img src={coverImage.large} alt="" />

				<Button className='description' variant="outlined" color='inherit' onClick={() => setOpen(prevOpen => !prevOpen) }>View Description</Button>
				<Collapse in={open}><div style={{ marginTop: '1rem',fontSize: '0.75em'}}>{description.replace('<br><br>', ' ')}</div></Collapse>
			</ul>
		</StyledInfo>
	);
}

export default Info;