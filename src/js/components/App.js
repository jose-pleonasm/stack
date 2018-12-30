import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { DynamicIntlProvider } from './DynamicIntlProvider';
import { Root } from './Root';

export const App = (props) => {
	const { config, store, history } = props;
	const { lang } = config;

	return (
		<Provider store={store}>
			<DynamicIntlProvider locale={lang}>
				<ConnectedRouter history={history}>
					<Root lang={lang} />
				</ConnectedRouter>
			</DynamicIntlProvider>
		</Provider>
	);
};
