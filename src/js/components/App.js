import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DynamicIntlProvider } from './DynamicIntlProvider';
import { Root } from './Root';

export const App = (props) => {
	const { config } = props;
	const { lang } = config;

	return (
		<DynamicIntlProvider locale={lang}>
			<BrowserRouter>
				<Root lang={lang} />
			</BrowserRouter>
		</DynamicIntlProvider>
	);
};
