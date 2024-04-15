import { AuthContext } from "contexts/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('Context must be used in a context provider')
    }

    return context
}