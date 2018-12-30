import * as React from 'react';
import { render } from 'react-dom';
import { APP_CONTAINER_ID } from './constants';
import { App } from './components/App';

render(<App />, document.getElementById(APP_CONTAINER_ID));
