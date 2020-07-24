import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AnimeContainer from './AnimeContainer';


const AnimeVisualization = () => {
	const client = new ApolloClient({
		uri: 'https://cors-anywhere.herokuapp.com/https://anilist.co/',
	});

	return(
		<ApolloProvider client={client}>
			<AnimeContainer />
		</ApolloProvider>
	);
}

export default AnimeVisualization;