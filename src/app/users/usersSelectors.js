export const getUsers = (state) => {
    return Object.values(state.users.map)
}