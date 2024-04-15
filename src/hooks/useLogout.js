import { useAuthContext } from "./useAuthContext"
import { useUserDataContext } from "./useUserDataContext"

// logout by updating global state variable for real-time and localstorage
export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: userDataDispatch } = useUserDataContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        userDataDispatch({type: 'SET_USERDATA', payload: null})
    }

    return {logout}
}