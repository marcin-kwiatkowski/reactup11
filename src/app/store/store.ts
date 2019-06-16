import { AnyAction, applyMiddleware, combineReducers, compose, createStore, Store } from 'redux'
import * as angular from 'angular'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import usersReducer, { UsersState } from './users'
import '../store/reducersProvider'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunkMiddleware].filter(m => !!m)
const enhancer = composeEnhancers(applyMiddleware(...middleware))

// React reducers
let reducersMap = {
    users: usersReducer
}

export interface AppState {
    resources: UsersState
}

// Angular reducers
const module = angular.module('angularApp')
module.config(($ngReduxProvider: any, reducersProvider: any) => {
    const ngReducers = reducersProvider.$get()
    if (ngReducers) {
        reducersMap = Object.assign(reducersMap, ngReducers)
    }

    if (store) {
        store.replaceReducer(combineReducers(reducersMap))
        $ngReduxProvider.provideStore(store)
    }
})

const store: Store<AppState> & {
    dispatch: ThunkDispatch<AppState, any, AnyAction>
} = createStore(combineReducers(reducersMap), enhancer)

export type AppStore = typeof store

export default store