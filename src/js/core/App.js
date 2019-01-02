import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { DynamicIntlProvider } from './DynamicIntlProvider';

export const App = (props) => {
	const { config, store, history, children } = props;
	const { lang } = config;

	return (
		<Provider store={store}>
			<DynamicIntlProvider locale={lang}>
				<ConnectedRouter history={history}>
					{children}
				</ConnectedRouter>
			</DynamicIntlProvider>
		</Provider>
	);
};
