import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

export const Menu = () => {
	return (
		<ul>
			{routes.map(route => (
				<li key={route.path}>
					<NavLink to={route.path} activeClassName={activeClassName}>
						<span>{route.title}</span>
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export const activeClassName = 'is-active';
