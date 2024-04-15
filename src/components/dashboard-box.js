import React, { Component, useEffect, useState } from 'react';
import { BsInfoSquare } from "react-icons/bs";

const styles = {
    BoxContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 35px',
        // border: "solid 2px black"
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
    }
}


export default function DashboardTalkBox({ callback, list_id, score}) {

    const onClick = () => {
        callback(list_id);
    }


    return (
        <div style={styles.BoxContainer} >
            <div onClick={onClick}>
                <BsInfoSquare size="2em" color='#EA3A60'/>
                <div> Score:  <br/>{score}</div>
            </div>
        </div>
        
    );
}