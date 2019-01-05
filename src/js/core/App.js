import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { DynamicIntlProvider } from './DynamicIntlProvider';
import { AppError } from './AppError';

export const App = (props) => {
	const { store, history, children } = props;
	const { config } = store.getState();
	if (!config) {
		throw new AppError('NO_CONFIGURATION_PROVIDED');
	}

	return (
		<Provider store={store}>
			<DynamicIntlProvider locale={config.lang}>
				<ConnectedRouter history={history}>
					{children}
				</ConnectedRouter>
			</DynamicIntlProvider>
		</Provider>
	);
};
