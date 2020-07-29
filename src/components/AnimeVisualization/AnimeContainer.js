import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import RadarChartViz from './RadarChart';

const StyledContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: #fff;
`;


const AnimeContainer = () => {
	const [search, setSearch] = useState("");
	const [submit, setSubmit] = useState("");

	const GET_ANIME_STATS = gql`
		{
			Media(search: "${submit}") {
		    title {
		      romaji
		      english
		      native
		    }
		    genres
		    tags {
		      name
		      description
		      category
		      rank
		    }
		    rankings {
		      year
		      context
		    }
		  }
		}
	`;

	const { loading, error, data } = useQuery(GET_ANIME_STATS);

	const handleChange = (event) => {
		setSearch(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmit(search);
	}

	const renderRadarChart = ({genres}) => {
		// console.log("test");
		const RadarData = [];

		genres.map(genre => {
			RadarData.push({subject: genre, A: 150, B: 110, fullMark: 150});
			// console.log(RadarData);
		});
		return RadarData;
	}

	return (
		<StyledContainer>
			{loading && <p>Loading...</p>}
			{error && <p>{error.message}</p>}

			<form onSubmit={handleSubmit}>
				<input type="text" name="search" value={search} onChange={handleChange}></input>
			</form>
			
			{data ? 
				<>
					<RadarChartViz data={renderRadarChart(data.Media)}/>
					<RadarChartViz data={renderRadarChart(data.Media)}/> 
				</>
			: ""}
			
			
		</StyledContainer>
		
	);
}

export default AnimeContainer;
