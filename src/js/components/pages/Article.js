import * as React from 'react';
import { GeneralLayout } from '../layout/GeneralLayout';
import { articles } from '../../articles';

export const Article = (props) => {
	const { match } = props;
	const { id } = match.params;
	const { title } = articles.find(article => article.id === id);

	return (
		<GeneralLayout>
			<article>
				<h1>{title}</h1>
			</article>
		</GeneralLayout>
	);
};
