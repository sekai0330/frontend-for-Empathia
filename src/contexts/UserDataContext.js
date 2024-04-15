import { createContext, useReducer } from 'react'

export const UserDataContext = createContext()

// the previous state value before we make changes to it
export const userDataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERDATA':
            return {
                user_data: action.payload
            }
        case 'CREATE_USERDATA':
            return {
                user_data: [action.payload]
            }
        case 'DELETE_USERDATA':
            return {
                // deletes particular user data from the global state array while keeping rest
                user_data: state.user_data.filter((d) => d._id !== action.payload._id)
            }
        default:
            return state

    }
}

export const UserDataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userDataReducer, {
        user_data: null
    })

    return (
        <UserDataContext.Provider value={{...state, dispatch}}>
            { children }
        </UserDataContext.Provider>
    )
}