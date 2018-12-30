import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { GeneralLayoutContainer as GeneralLayout } from '../layout/GeneralLayoutContainer';

export const News = () => {
	return (
		<GeneralLayout>
			<h1>
				<FormattedMessage id="news.title" defaultMessage="News" />
			</h1>
		</GeneralLayout>
	);
};
