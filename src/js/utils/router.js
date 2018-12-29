import pathToRegexp from 'path-to-regexp';

export const resolvePath = (route, params) => {
	const toPath = pathToRegexp.compile(route.path);
	return toPath(params);
};
