import { UserDataContext } from "contexts/UserDataContext";
import { useContext } from "react";

export const useUserDataContext = () => {
    const context = useContext(UserDataContext)

    if (!context) {
        throw Error('Context must be used in a context provider')
    }

    return context
}