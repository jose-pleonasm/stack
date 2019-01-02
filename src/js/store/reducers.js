import { combineReducers } from 'redux';
import { articles, initialState as articlesInitialState } from './reducers/articles';

export const reducers = {
	articles,
};

export const appInitialState = {
	articles: articlesInitialState,
};

export const appReducer = combineReducers(reducers);
