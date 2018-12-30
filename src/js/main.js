import * as React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { APP_CONTAINER_ID, DEFAULT_LANG } from './constants';
import { App } from './components/App';
import { createStore } from './redux';
import { reducers } from './store/reducers';

const config = {
	lang: DEFAULT_LANG,
};
const history = createBrowserHistory();
const store = createStore(reducers, {}, history);

render(<App config={config} store={store} history={history} />, document.getElementById(APP_CONTAINER_ID));
