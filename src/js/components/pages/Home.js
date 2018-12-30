import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { GeneralLayoutContainer as GeneralLayout } from '../layout/GeneralLayoutContainer';

export const Home = () => {
	return (
		<GeneralLayout>
			<h1>
				<FormattedMessage id="home.title" defaultMessage="Home" />
			</h1>
		</GeneralLayout>
	);
};
