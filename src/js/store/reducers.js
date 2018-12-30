import { articles, initialState as articlesInitialState } from './reducers/articles';

export const reducers = {
	articles,
};

export const appInitialState = {
	articles: articlesInitialState,
};
