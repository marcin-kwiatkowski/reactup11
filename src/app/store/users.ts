import { actionTypes } from '../users/usersActions'

export interface User {
    [key: string]: any

    id: string
    name: string
    surname: string
    age: number
    email: string
}

export interface UsersState {
    map: { [key: string]: User },
    selected: User | null
}

const initialState: UsersState = {
    map: {},
    selected: null
}

export default (state = initialState, action: any) => {
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