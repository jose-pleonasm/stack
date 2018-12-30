import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { DynamicIntlProvider } from './DynamicIntlProvider';

export const App = (props) => {
	const { config, store, history, component: Component } = props;
	const { lang } = config;

	return (
		<Provider store={store}>
			<DynamicIntlProvider locale={lang}>
				<ConnectedRouter history={history}>
					<Component lang={lang} />
				</ConnectedRouter>
			</DynamicIntlProvider>
		</Provider>
	);
};
