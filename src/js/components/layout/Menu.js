import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { routes, article as routeArticle } from '../../routes';
import { resolvePath } from '../../utils/router';
import { articles } from '../../articles';

const straightRoutes = routes.filter(route => route !== routeArticle)

export const Menu = () => {
	return (
		<ul>
			{straightRoutes.map(route => (
				<li key={route.path}>
					<NavLink to={route.path} activeClassName={activeClassName}>
						<span>{route.title}</span>
					</NavLink>
				</li>
			))}
			{articles.map(article => (
				<li key={article.id}>
					<NavLink to={resolvePath(routeArticle, article)} activeClassName={activeClassName}>
						<span>{article.title}</span>
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export const activeClassName = 'is-active';
