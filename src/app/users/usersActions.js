export const actionTypes = {
    usersUpdated: 'users-updated',
    userSelected: 'user-selected'
}

export const fetchUsers = () => dispatch => {
    const users = require('../../assets/users.json')
    dispatch({
        type: actionTypes.usersUpdated,
        payload: users
    })
}

export const selectUser = (user) => dispatch => {
    dispatch({
        type: actionTypes.userSelected,
        payload: user
    })
}