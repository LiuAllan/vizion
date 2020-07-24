import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import RadarChartViz from './RadarChart';

const GET_ANIME = gql`
	query GET_ANIME($id: Int) {
		Media(id: $id) {
	    	type
	  	}
	}
`;


const AnimeContainer = () => {
	const { loading, error, data } = useQuery(GET_ANIME, {
		variables: { id: 98977},
	});

	return (
		<>
			{loading && <p>Loading...</p>}
			{error && <p>{error.message}</p>}
			{console.log(data)}
			<RadarChartViz />
			}
		</>
		
	);
}

export default AnimeContainer;
