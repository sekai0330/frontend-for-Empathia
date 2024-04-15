import React from 'react';
import { BsXCircle } from "react-icons/bs";
import { useUserDataContext } from 'hooks/useUserDataContext';
import { useAuthContext } from 'hooks/useAuthContext';


const styles = {
    popUpBoxContainer: {
        zIndex: '2',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        
    },
    
    popUpBox: {
        position: 'relative',
        minHeight: 'auto',
        maxHeight: 'auto',
        minWidth: '300px',
        backgroundColor: '#fff',
        border: '1px solid #999',
        borderRadius: '10px',
        zIndex: '3',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    itemsContainer: {
        width: '100%',
        height: '100%',
        marginTop: '20px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
     

    },

    feedbackContainer: {
        width: '100%',
        backgroundColor: '#EA3A60',
        padding: '10px',
        borderRadius: '5px',
        minHeight: '140px',
        maxHeight: '200px',
        color: '#fff',
        overFlow: 'scroll'
    },

    contentContainer: {
        width: '80%',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // gap: '0px'
    },

    closeBtnContainer: {
        width: '90%',
        display: 'flex',
        justifyContent: 'flex-end'
    },

    transcriptContainer: {
        backgroundColor: '#EA3A60',
        padding: '10px',
        borderRadius: '5px',
        minHeight: '140px',
        color: '#fff'
    },

    title: {
        margin: '0px',
        fontSize: '18px',
        fontWeight: '300',

    },

    textContent: {
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: '1200',
        marginTop: '0px',
        color: "#F0758F",
    },

    deleteBtn: {
        padding: '10px',
        backgroundColor: 'transparent',
        color: '#C1C1C1',
        borderRadius: '10px',
        border: 'solid 1px #C1C1C1',
        width: '10%'
        
    },

}


export default function ScorePopUpWin ({ callback , list_id }) {
    const { dispatch } = useUserDataContext()
    const { user } = useAuthContext()

    const handleDelete = async () => {
        if (!user) {
            return
        }

        const response = await fetch('https://talkhappi-api.onrender.com' + '/api/userData/' + list_id._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_USERDATA', payload: json})
        }

        callback()
    }

    return (
        <div style={styles.popUpBoxContainer}>
            <div style={styles.popUpBox} className="popUpWindow">
                <div style={styles.itemsContainer}>   
                    <div style={styles.closeBtnContainer}>
                        <BsXCircle size="1.5em" color='#EA3A60' onClick={callback}/>
                    </div>
                    
                    <div style={styles.contentContainer}>
                        <p style={styles.title}>Score: </p>
                        <p style={styles.textContent}>{list_id.scores}</p>
                        <p style={styles.title}>Transcript: </p>
                        <div style={styles.transcriptContainer}>{list_id.transcript}</div>
                        <p style={styles.title}>Feedback: </p>
                        <div style={styles.feedbackContainer} className='scroll'>{list_id.feedback}</div>
                        <p style={styles.title} >Date: {list_id.createdAt.toString().substring(0,10)}</p>
                    </div>
                    
                    <button onClick={handleDelete} style={styles.deleteBtn}>Delete</button>
                </div>
                
            </div>
        </div>
    )
}

