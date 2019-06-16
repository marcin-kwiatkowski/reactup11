import { actionTypes } from '../users/usersActions'

const initialState = {
    map: {},
    selectedId: null
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
            const userId = action.payload
            if (state.map[userId]) {
                return {
                    ...state,
                    selectedId: userId
                }
            }
        }
        default:
            return state
    }
}