import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { home, news } from '../routes';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { NotFound } from './pages/NotFound';
import '../../css/index.scss';

export const App = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route {...home} component={Home} />
				<Route {...news} component={News} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};
