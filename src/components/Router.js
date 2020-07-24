import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from "../App";
import Pandemic from '../pages/pandemic';
import Anime from '../pages/anime';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={App} exact />
			<Route path="/pandemic" component={Pandemic} />
			<Route path="/anime" component={Anime} />
		</Switch>
	</BrowserRouter>
);

export default Router;