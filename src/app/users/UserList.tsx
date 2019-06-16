import * as React from 'react'
import { connect } from 'react-redux'
import styles from './UserList.scss'
import { AppState } from '../store/store'
import { getUsers } from './usersSelectors'
import { User } from '../store/users'
import { selectUser } from './usersActions'

interface Props {
    users: User[]
    selectUser: (user: User) => void
}

class UserList extends React.Component<Props> {
    render() {
        const {users} = this.props
        if (!users) {
            return null
        }

        return (
            <div className={styles.list}>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }

//     <!--    <div class="list">-->
//     <!--        <ul>-->
//     <!--            <li class="user"-->
//     <!--                ng-repeat="user in users"-->
//     <!--                ng-click="selectUser(user)"-->
//     <!--                ng-class="{selected: isUserSelected(user)}"-->
//     <!--            >-->
//     <!--                {{user.name + ' ' + user.surname}}-->
// <!--            </li>-->
// <!--        </ul>-->
// <!--    </div>-->
    private renderUsers() {
        const {users} = this.props
        return users.map((user: User, key: number) => {
            return (
                <li className={styles.user}
                    key={key}
                    onClick={() => this.handleSelect(user)}
                >
                    {user.name + ' ' + user.surname}
                </li>
            )
        })
    }

    private handleSelect(user: User) {
        this.props.selectUser(user)
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        users: getUsers(state)
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        selectUser: (user: User) => dispatch(selectUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
