import * as React from 'react'
import UserList from '../users/UserList'
import { inStoreProvider } from '../store/connectStore'

class UserListRoot extends React.Component {
    render() {
        return (
            <UserList/>
        )
    }
}

export default inStoreProvider(UserListRoot)
