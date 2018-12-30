import * as React from 'react';
import { render } from 'react-dom';
import { APP_CONTAINER_ID, DEFAULT_LANG } from './constants';
import { App } from './components/App';
import { createStore } from './redux';
import { appReducer } from './store/reducers';

const config = {
	lang: DEFAULT_LANG,
};
const store = createStore(appReducer);

render(<App config={config} store={store} />, document.getElementById(APP_CONTAINER_ID));
