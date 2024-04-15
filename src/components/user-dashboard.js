import React, { Component, useEffect, useState } from 'react';

// componenents
import DashboardNewBox from 'components/dashboard-new-box'
import DashboardGraph from './dashboard-graph';
import DashboardTalkBox from 'components/dashboard-box';
import UserDataDetails from './user-data-details.js';
import ScorePopUpWin from './scorePopUpWin';

// context
import { useUserDataContext } from 'hooks/useUserDataContext';
import { useAuthContext } from 'hooks/useAuthContext';

const styles = {
    dashboardContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        
        
        transition: 'all 0.15s',
        '&:hover': {
            color: '#000000',
            cursor: 'pointer',
        },
        '&.active': {
            color: '#000000',
        },
        
    },
    DashboardBoxContainer: {
        width: '80%',
        display: 'flex',
        gap: '15px',
        marginBottom: '50px',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      

    },
    GraphContainer: {
        margin: '15vh',
        width: '70%',
        backgroundColor: '#FFFFFF',
        padding: '20px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius: '10px'
        
    
    }
}



export default function UserDashboard() {
    const [popUpOpen, setPopUpOpen] = useState(-1);

    const { user_data, dispatch } = useUserDataContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchUserData = async () => {
        const response = await fetch('https://talkhappi-api.onrender.com' + '/api/userData/', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        
        // check if response is ok
        if (response.ok) (
            dispatch({type: 'SET_USERDATA', payload: json})
        )}
        
        if (user) {
            fetchUserData()
        }
        
    }, [dispatch, user])

    return (
        <div style={styles.dashboardContainer}>
            {/* Pop popup window if state is true, pass a callback function for the close button */}
            {(popUpOpen != -1) && <ScorePopUpWin callback={() => {setPopUpOpen(-1)}} list_id={user_data[popUpOpen]}/>}

            <div style={styles.GraphContainer}>
                <DashboardGraph userDataList={user_data} />
            </div>
            
            
            <div style={styles.DashboardBoxContainer}>

                <DashboardNewBox/>

                {user_data && user_data.map((userData, index) => {
                return (
                    <DashboardTalkBox key={userData._id} callback={(id) => {setPopUpOpen(id); console.log(id)}} list_id={index} score={userData.scores}/>
                )
            })}
            </div>
            
        </div>
    
    
    );
}


