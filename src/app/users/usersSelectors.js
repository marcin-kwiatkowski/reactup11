export const getUsers = (state) => {
    return Object.values(state.users.map)
}

export const getSelectedUser = (state) => {
    return state.users.selected
}