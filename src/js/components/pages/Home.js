import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { GeneralLayout } from '../GeneralLayout';

export const Home = () => {
	return (
		<GeneralLayout>
			<h1>
				<FormattedMessage id="home.title" defaultMessage="Home" />
			</h1>
		</GeneralLayout>
	);
};
