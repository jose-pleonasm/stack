
export const home = {
	path: '/',
	exact: true,
	title: 'Home',
};

export const news = {
	path: '/news',
	exact: true,
	title: 'News',
};

export const article = {
	path: '/article/:id',
	exact: true,
};

export const routes = [
	home,
	news,
	article,
];
