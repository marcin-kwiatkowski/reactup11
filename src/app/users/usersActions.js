export const actionTypes = {
    usersUpdated: 'users-updated'
}

export const fetchUsers = () => dispatch => {
    const users = require('../../assets/users.json')
    dispatch({
        type: actionTypes.usersUpdated,
        payload: users
    })
}