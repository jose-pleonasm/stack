import { applyMiddleware, compose, combineReducers, createStore as originalCreateStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from 'connected-react-router';

export const createStore = (reducer, preloadedState, history) => {
	const middlewares = [routerMiddleware(history), thunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const routerReducer = connectRouter(history);
	let composeEnhancers = compose;

	if (process.env.NODE_ENV === 'development'
		&& typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
		composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	}

	return originalCreateStore(
		(state, action) => {
			const { router: routerState, ...appState } = state;
			return {
				...reducer(appState, action),
				router: routerReducer(routerState, action),
			};
		},
		preloadedState,
		composeEnhancers(middlewareEnhancer),
	);
};
