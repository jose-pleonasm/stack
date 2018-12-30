import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { DynamicIntlProvider } from './DynamicIntlProvider';
import { Root } from './Root';

export const App = (props) => {
	const { config, store } = props;
	const { lang } = config;

	return (
		<Provider store={store}>
			<DynamicIntlProvider locale={lang}>
				<BrowserRouter>
					<Root lang={lang} />
				</BrowserRouter>
			</DynamicIntlProvider>
		</Provider>
	);
};
