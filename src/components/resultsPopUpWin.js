import React, { Component, useEffect, useState } from 'react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
  );
  

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
    
    closeBtnContainer: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between'
    },

    arrowContainer: {
        display: 'flex',
        border: "solid 2px #EA3A60",
        borderRadius: '20px',
        padding: '5px',
        paddingLeft: '10px',
        paddingRight: '10px'
    },

    arrows: {
        marginTop: "-2px"
    },
    
    popUpBox: {
        position: 'relative',
        minHeight: '200px',
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

    resultsContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    resultsBoxContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '20px',
        width: '90%',
        alignItems: 'center'
    },


    feedbackContainer: {
        
        width: '90%',
        backgroundColor: '#EA3A60',
        padding: '10px',
        borderRadius: '5px',
        minHeight: '140px',
        maxHeight: '200px',
        color: '#fff',
        overFlow: 'scroll'
    },

    transcriptConatiner: {
       
        backgroundColor: '#EA3A60',
        padding: '10px',
        borderRadius: '5px',
        minWidth: '100px',
        minHeight: '140px',
        color: '#fff',
        overFlow: 'scroll',
        
        display: 'flex',
        justifyContent: 'center'
    },

    graphContainer: {
     

        display: 'flex',
        justifyContent: 'center',
        height: '100%'
    }

}


function LoadingSection () {
    return (
        <div id="preloader">
            <div id="loader"></div>
        </div>
    )
}


function ResultsSection ( { UserData }) {

    console.log(UserData)
    const data = {
        datasets: [{
            data: [UserData[0], (100-UserData[0])],
            backgroundColor:[
              'red',
              '#d1b5bb'
            ]
        },
      ],

      labels: [
        'Score: ' + UserData[0],
    ], 
    };




    return (
        <div style={styles.resultsContainer}>
            <div style={styles.resultsBoxContainer} className="resultsBoxContainer">
                <div style={styles.graphContainer} className="graphResult"><Doughnut data={data} /></div>
                <div style={styles.transcriptConatiner} className='scroll transcriptResult' >{UserData[2]}</div>
            </div>

            <div>Feedback</div>
            <div style={styles.feedbackContainer} className='scroll' >{UserData[1]}</div>
            
            
        </div>  
        
    )
}

export default function ResultsPopUpWin ({ callback , dataReceived, userData}) {
    return (
        <div style={styles.popUpBoxContainer}>
            <div style={styles.popUpBox} className="popUpWindow">
                <div style={styles.itemsContainer}>   
                    <div style={styles.closeBtnContainer}>

                        <div style={styles.arrowContainer} className="popUpArrowBtb" onClick={callback}>
                            
                            <BsArrowLeft style={styles.arrows} size="2em" color='#EA3A60' />
                            <div>New Talk</div>
                        </div>
                        
                        <a href="/dashboard" style={{textDecoration: 'none'}}>
                            <div style={styles.arrowContainer} className="popUpArrowBtb">
                                <div>Dashboard</div>
                                <BsArrowRight style={styles.arrows} size="2em" color='#EA3A60'/>
                            </div>
                        </a>
                        
                    </div>

                    {/* loading screen */}
                    {!dataReceived && <LoadingSection/>}

                    {/* results screen */}
                    {(dataReceived && userData) && <ResultsSection UserData={userData}/>}


                    {/* <ResultsSection UserData={[10, "gdsal;fksalfd", "fdsajflkdsajlfkjsa;"]}/> */}
                </div>
                
            </div>
        </div>
    )

}
