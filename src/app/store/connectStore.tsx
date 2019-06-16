import * as React from 'react'
import { ComponentType } from 'react'
import { Provider } from 'react-redux'

const store = require('./store').default;

export function inStoreProvider<TProps extends {}>(WrappedComponent: ComponentType<TProps>) {
    return (props: TProps) => {
        return <Provider store={store}>
            <WrappedComponent {...props}/>
        </Provider>
    }
}
