import React, { Component, useEffect, useState } from 'react';

// Speech to text recognition modules
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

// import context
import { useUserDataContext } from 'hooks/useUserDataContext';

import ResultsPopUpWin from './resultsPopUpWin.js';

// import components
import UserDataDetails from './user-data-details.js';
import AddUserData from './add-user-data.js';

const styles = {

    container: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    speechBox: {
        borderRadius: '5px',
        height: '20em',
        width: '80%',
        color: 'white',
        backgroundColor: '#EA3A60',
        padding: '10px',
        fontSize: '30px',
        boxShadow: 'rgba(234,58,96, 0.4) 5px 5px',
        border: 'solid 2px #000'

    },
    speechTitle: {
        marginTop: '5em',
        width: '85%',
        color: 'rgba(22,22,63, 0.8)',
        fontWeight: 'lighter',
        fontSize: '36px',
        textAlign: 'left',
        padding: '10px'
    },
    speechButtonContainer: {
        width: '80%',

    },

    btsContainer: {
      display: 'flex',
      width: '80%',
      justifyContent: 'center',
      boxShadow: 'rgba(234,58,96, 0.4) 5px 5px',
      border: 'none'
    },

    editButtons: {
      paddingTop: '30px',
      paddingBottom: '30px',
      border: 'solid 0.1px #000',


    },

    submitButton: {
      marginTop: '20px',
      width: '80%',
      paddingTop: '30px',
      paddingBottom: '30px',
      boxShadow: 'rgba(234,58,96, 0.4) 5px 5px',
      fontSize: '1.2rem',
      border: 'solid 0.1px #000',

    },

  };

import { useAuthContext } from "hooks/useAuthContext";
import ScorePopUpWin from './scorePopUpWin.js';

export default function ProductInput() {
  // Import variables from speech recognition hook
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();


  const { dispatch } = useUserDataContext()
  const { user } = useAuthContext()
  // testing
  const [id, setId] = useState('123456')
  const [scores, setScores] = useState('182347')
  const [popUpOpen, setpopUpOpen] = useState(false)
  const [dataReceived, setDataReceived] = useState(false)
  const [currentData, setCurrentData] = useState([])


  const handleAdd = async (e) => {

      if (transcript == "") {
        return
      }
      const userData = {id, scores, transcript}
      setpopUpOpen(true)
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
          dispatch({type: 'CREATE_USERDATA', payload: json.userData})
          const feedback = json.feedback
          const score = json.score
          console.log(feedback)
          console.log(score)
          console.log('Data added')
          await setCurrentData([score, feedback, userData.transcript])          
          setDataReceived(true)
      }

      resetTranscript
    }

  // Handle browser support error
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // Handling microphone setting turned off
  if (!isMicrophoneAvailable) {
    return <span style={styles.container}><strong>Enable your microphone to use the web app!</strong></span>
  }

  return (
      <div style={styles.container}>

          {(popUpOpen) && <ResultsPopUpWin callback={() => {setpopUpOpen(false); setCurrentData([]); setDataReceived(false)}} dataReceived={dataReceived} userData={currentData}/>}

          <div style={styles.speechTitle}>Talk to us, tell us about your day...</div>
          <div style={styles.speechBox}>
            {transcript}
          </div>
          <p>Microphone: {listening ? 'on' : 'off'}</p>

          <div style={styles.btsContainer} className="btsContainer"> 
            <button style={styles.editButtons} onClick={() => SpeechRecognition.startListening({
              continuous: true,
              language: 'en-US'
            })}>
              Start
            </button>

            <button style={styles.editButtons} onClick={SpeechRecognition.stopListening}>Stop</button>
            <button style={styles.editButtons} onClick={resetTranscript}>Reset</button>
          </div>
          
          {/* Submit button  */}
          
          <button style={styles.submitButton} className="submitButton" onClick={() => handleAdd()}>Submit</button>


          
      </div>
  );
}

