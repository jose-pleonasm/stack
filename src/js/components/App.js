import * as React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import cs from 'react-intl/locale-data/cs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LANG } from '../constants';
import { home, news, article } from '../routes';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { Article } from './pages/Article';
import { NotFound } from './pages/NotFound';
import '../../css/index.scss';

addLocaleData(cs);

export const App = (props) => {
	return (
		<IntlProvider locale={LANG}>
			<BrowserRouter>
				<Switch>
					<Route {...home} component={Home} />
					<Route {...news} component={News} />
					<Route {...article} component={Article} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</IntlProvider>
	);
};
