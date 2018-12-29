import * as React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Menu } from './layout/Menu';


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
