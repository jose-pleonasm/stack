import * as React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory, createStore, App } from './core/index';
import { APP_CONTAINER_ID, DEFAULT_LANG } from './constants';
import { appReducer } from './store/reducers';
import { Root } from './components/Root';

const config = {
	lang: DEFAULT_LANG,
};
const history = createBrowserHistory();
const store = createStore(appReducer, {}, history);

render(<App config={config} store={store} history={history}><Root lang={config.lang} /></App>, document.getElementById(APP_CONTAINER_ID));
