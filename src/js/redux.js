import { applyMiddleware, compose, createStore as originalCreateStore } from 'redux';
import thunk from 'redux-thunk';

export const createStore = (reducer, preloadedState) => {
	const middlewares = [thunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	let composeEnhancers = compose;

	if (process.env.NODE_ENV === 'development'
		&& typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
		composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	}

	return originalCreateStore(
		reducer,
		preloadedState,
		composeEnhancers(middlewareEnhancer),
	);
};
