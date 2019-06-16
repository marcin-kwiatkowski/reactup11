import { actionTypes } from '../users/usersActions'

const initialState = {
    map: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.usersUpdated: {
            const map = Object.assign({}, state.map)
            action.payload.forEach(user => {
                map[user.id] = user
            })
            return {
                map
            }
        }
        default:
            return state
    }
}