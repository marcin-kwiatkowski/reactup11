import { actionTypes } from '../users/usersActions'

const initialState = {
    map: {},
    selected: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.usersUpdated: {
            const map = Object.assign({}, state.map)
            action.payload.forEach(user => {
                map[user.id] = user
            })
            return {
                ...state,
                map
            }
        }
        case actionTypes.userSelected: {
            const user = action.payload
            if (state.map[user.id]) {
                return {
                    ...state,
                    selected: user
                }
            }
            return state
        }
        default:
            return state
    }
}