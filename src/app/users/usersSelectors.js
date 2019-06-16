export const getUsers = (state) => {
    return Object.values(state.users.map)
}

export const getSelectedUserId = (state) => {
    return state.users.selectedId
}