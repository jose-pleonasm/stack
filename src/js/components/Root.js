import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { APP_NAME } from '../constants';
import { home, news, article } from '../routes';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { Article } from './pages/Article';
import { NotFound } from './pages/NotFound';
import '../../css/index.scss';

export const Root = (props) => {
	const { lang } = props;

	return (
		<React.Fragment>
			<Helmet htmlAttributes={{ lang }}>
				<title>{APP_NAME}</title>
			</Helmet>
			<Switch>
				<Route {...home} component={Home} />
				<Route {...news} component={News} />
				<Route {...article} component={Article} />
				<Route component={NotFound} />
			</Switch>
		</React.Fragment>
	);
};
