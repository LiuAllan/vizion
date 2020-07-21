import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from "../App";
import Placeholder from '../pages/placeholder';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={App} exact />
			<Route path="/placeholder" component={Placeholder} />
		</Switch>
	</BrowserRouter>
);

export default Router;