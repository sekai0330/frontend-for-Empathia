import { useState } from "react"

// import context
import { useUserDataContext } from 'hooks/useUserDataContext';
import { useAuthContext } from "hooks/useAuthContext";

const AddUserData = ({ userData }) => {
    // Hook to fetch user data upon load
    const { dispatch } = useUserDataContext()
    const { user } = useAuthContext()

    const handleAdd = async () => {
        if (!user) {
            console.log('You must be logged in')
            return
        }

        const response = await fetch('https://talkhappi-api.onrender.com' + '/api/userData/', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            console.log('Error')
        }
        if (response.ok) {
            // dispatching add user data context to update global user_data state
            dispatch({type: 'CREATE_USERDATA', payload: json})
            console.log('Data added')
        }
    }

    return (
        <button onClick={handleAdd}>Add data</button>
    )
}

export default AddUserData