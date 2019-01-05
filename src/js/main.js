import * as React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory, createStore, App } from './core/index';
import { APP_CONTAINER_ID, DEFAULT_LANG } from './constants';
import { appReducer } from './store/reducers';
import { RootContainer as Root } from './components/RootContainer';

const config = {
	lang: DEFAULT_LANG,
};
const history = createBrowserHistory();
const store = createStore(appReducer, { config }, history);

render(
	<App store={store} history={history}>
		<Root />
	</App>,
	document.getElementById(APP_CONTAINER_ID),
);
