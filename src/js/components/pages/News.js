import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { GeneralLayout } from '../GeneralLayout';

export const News = () => {
	return (
		<GeneralLayout>
			<h1>
				<FormattedMessage id="news.title" defaultMessage="News" />
			</h1>
		</GeneralLayout>
	);
};
