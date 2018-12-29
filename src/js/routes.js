import { Home } from './components/pages/Home';
import { News } from './components/pages/News';

export const home = {
	path: '/',
	exact: true,
	component: Home,
	title: 'Home',
};

export const news = {
	path: '/news',
	exact: true,
	component: News,
	title: 'News',
};

export const routes = [
	home,
	news,
];
