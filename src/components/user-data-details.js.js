import { useUserDataContext } from "hooks/useUserDataContext"

// date fns api
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const styles = {
    UserDataDetailContainer: {
        background: '#fff',
        borderRadius: '4px',
        margin: '20px auto',
        padding: '20px',
        position: 'relative',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.5)'
    },
}

const UserDataDetails = ({ userData }) => {
    const { dispatch } = useUserDataContext()

    // function to delete user data
    const DeleteUserData = async () => {
        const response = await fetch('https://talkhappi-api.onrender.com' + '/api/userData/' + userData._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_USERDATA', payload: json})
        }
    }

    return (
        <div style={styles.UserDataDetailContainer}>
            <h4>{userData._id}</h4>
            <p><strong>Score: </strong> {userData.scores}</p>
            <p><strong>Transcript: </strong> {userData.transcript}</p>
            <p>{userData.createdAt}</p>
            <button onClick={DeleteUserData}>Delete</button>
        </div>
    )
}

export default UserDataDetails