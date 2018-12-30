import { applyMiddleware, compose, combineReducers, createStore as originalCreateStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from 'connected-react-router';

export const createStore = (reducers, preloadedState, history) => {
	const middlewares = [routerMiddleware(history), thunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	let composeEnhancers = compose;

	if (process.env.NODE_ENV === 'development'
		&& typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
		composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	}

	return originalCreateStore(
		combineReducers({
			router: connectRouter(history),
			...reducers,
		}),
		preloadedState,
		composeEnhancers(middlewareEnhancer),
	);
};
