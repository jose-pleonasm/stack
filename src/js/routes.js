
export const home = {
	path: '/',
	exact: true,
	name: 'Home',
};

export const news = {
	path: '/news',
	exact: true,
	name: 'News',
};

export const article = {
	path: '/article/:id',
	exact: true,
	name: 'Article',
};

export const routes = [
	home,
	news,
	article,
];
