import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import angular from 'angular';
import thunkMiddleware from 'redux-thunk'
import usersReducer from './users'
import '../store/reducersProvider'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunkMiddleware].filter(m => !!m);
const enhancer = composeEnhancers(applyMiddleware(...middleware));

// React reducers
let reducersMap = {
    users: usersReducer
};

// Angular reducers
const module = angular.module('angularApp')
module.config(($ngReduxProvider, reducersProvider) => {
    const ngReducers = reducersProvider.$get()
    if (ngReducers) {
        reducersMap = Object.assign(reducersMap, ngReducers)
    }

    if (store) {
        store.replaceReducer(combineReducers(reducersMap))
        $ngReduxProvider.provideStore(store)
    }
})

const store = createStore(combineReducers(reducersMap), enhancer)
export default store
