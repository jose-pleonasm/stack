import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { routes, article as routeArticle } from '../../routes';
import { resolvePath } from '../../utils/router';

const straightRoutes = routes.filter(route => route !== routeArticle);

export const Menu = (props) => {
	const { articles = [] } = props;

	return (
		<ul>
			{straightRoutes.map(route => (
				<li key={route.name}>
					<NavLink to={route.path} activeClassName={activeClassName}>
						<FormattedMessage id={`menu.${route.name}`} defaultMessage={route.name} />
					</NavLink>
				</li>
			))}
			{articles.map(article => (
				<li key={article.id}>
					<NavLink to={resolvePath(routeArticle, article)} activeClassName={activeClassName}>
						<FormattedMessage id={`menu.${routeArticle.name}`} defaultMessage={article.title} />
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export const activeClassName = 'is-active';
