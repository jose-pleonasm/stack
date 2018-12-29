import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from '../routes';
import { NotFound } from './pages/NotFound';
import '../../css/index.scss';

export const App = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				{routes.map(route => (
					<Route key={route.path} {...route} />
				))}
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};
