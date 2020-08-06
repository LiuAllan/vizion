import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Aos from 'aos';
import 'aos/dist/aos.css';
// Styles
import StyledContainer from './StyledAnimeContainer';
// Components
import RadarChartViz from './RadarChart';
import BarChartViz from './BarChart';
import Info from './Info';
import Media from './Media';
import Ranking from './Ranking';
import Duration from './Duration';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const AnimeContainer = () => {
	const [search, setSearch] = useState("");
	const [submit, setSubmit] = useState("Fire Force");

	const GET_ANIME_STATS = gql`
		{
			Media(search: "${submit}") {
		    title {
		      romaji
		      english
		      native
		    }
		    description
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
		    bannerImage
		    coverImage {
		    	large
		    }
		    type
		    format
		    status
		    startDate {
		      year
		      month
		      day
		    }
		    episodes
		    duration
		    chapters
		    volumes
		    averageScore
		    meanScore
		    popularity
		    trending
		    favourites
		  }
		}
	`;

	useEffect(() => {
		Aos.init({
			duration: 500,
			once: true,
		});
	})

	const { loading, error, data } = useQuery(GET_ANIME_STATS);

	const handleChange = (event) => {
		setSearch(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmit(search);
	}

	const renderRadarChart = ({genres}) => {
		const RadarData = [];

		genres.map(genre => {
			RadarData.push({subject: genre, A: 150, B: 100, fullMark: 150});
		});
		return RadarData;
	}

	const renderBarChart = ({tags}) => {
		const BarData = [];
		tags.map((tag) => {
			BarData.push({ name: tag.name, value: tag.rank, amt: 200 })
		});
		return BarData;
	} 

	return (
		<StyledContainer>
			<div className="searchbar">
				<h1>Search for an Anime or Manga</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" name="search" value={search} onChange={handleChange} placeholder="Search" className="searchbox"></input>
				</form>
			</div>

			{loading && <p>Loading...</p>}
			{error && <p style={{textAlign: 'center'}}>Your search for {submit} did not have any matches.</p>}
			
			{data ?
				<>
				<img src={data.Media.bannerImage} alt="" className="bannerImg"/>
				<Grid container spacing={1} className="viz-container">
					<Grid item xs={12} md={4}>
						<Paper variant="outlined" data-aos="fade-up">
							<h3>General</h3>
							<Info data={data.Media}/>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper variant="outlined" data-aos="fade-up" data-aos-delay="100">
							<h3>Category</h3>
							{ data.Media.tags.length > 0 ?
								<BarChartViz data={ renderBarChart(data.Media)}/>
								: <p>Missing data</p>
							}
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper variant="outlined" data-aos="fade-up" data-aos-delay="200">
							<h3>Genres</h3>
							<RadarChartViz data={renderRadarChart(data.Media)}/>
						</Paper>
					</Grid>

					<Grid item xs={12} md={4}>
						<Paper variant="outlined" data-aos="fade-up" data-aos-delay="100">
							<h3>Media</h3>
							<Media data={data.Media}/>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper variant="outlined" data-aos="fade-up" data-aos-delay="200">
							<h3>Duration</h3>
							<Duration data={data.Media}/>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper variant="outlined" data-aos="fade-up" data-aos-delay="300">
							<h3>Ranking</h3>
							<Ranking data={data.Media}/>
						</Paper>
					</Grid>
				</Grid>
				</>
			: ""
			}
			
			
		</StyledContainer>
		
	);
}

export default AnimeContainer;
