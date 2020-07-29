import React from 'react';
import ApolloClient from 'apollo-boost';
// import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
import AnimeContainer from './AnimeContainer';



const AnimeVisualization = () => {
	const client = new ApolloClient({
		uri: "https://graphql.anilist.co"
	});

	return(
		<ApolloProvider client={client}>
			<AnimeContainer />
		</ApolloProvider>
	);
}

export default AnimeVisualization;