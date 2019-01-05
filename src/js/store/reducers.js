import { combineReducers } from 'redux';
import { config, initialState as configInitialState } from './reducers/config';
import { articles, initialState as articlesInitialState } from './reducers/articles';

export const reducers = {
	config,
	articles,
};

export const appInitialState = {
	config: configInitialState,
	articles: articlesInitialState,
};

export const appReducer = combineReducers(reducers);
