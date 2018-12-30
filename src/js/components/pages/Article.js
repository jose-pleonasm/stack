import * as React from 'react';
import { GeneralLayoutContainer as GeneralLayout } from '../layout/GeneralLayoutContainer';

export const Article = (props) => {
	const { match, articles } = props;
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
