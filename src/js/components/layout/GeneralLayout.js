import * as React from 'react';
import { Header } from '../general/Header';
import { Footer } from '../general/Footer';
import { Menu } from '../general/Menu';

export const GeneralLayout = (props) => {
	const { children } = props;

	return (
		<div>
			<header role="banner">
				<Header />
			</header>
			<nav role="navigation">
				<Menu />
			</nav>
			<main role="main">
				{children}
			</main>
			<footer role="contentinfo">
				<Footer />
			</footer>
		</div>
	);
};
