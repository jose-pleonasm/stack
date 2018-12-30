import * as React from 'react';
import { render } from 'react-dom';
import { APP_CONTAINER_ID, DEFAULT_LANG } from './constants';
import { App } from './components/App';

const config = {
	lang: DEFAULT_LANG,
};

render(<App config={config} />, document.getElementById(APP_CONTAINER_ID));
