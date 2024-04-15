

import React, { Component, useEffect, useState } from 'react';
import { BsPlus } from "react-icons/bs";

const styles = {
    linkContainer: {
        textDecoration: 'none',
        color: 'inherit',
    },

    NewBoxContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 35px',
        // border: "solid 2px black"
        backgroundColor: '#FFFFFF',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        
    
    },
    
}

export default function DashboardNewBox() {
    return (
        <a href="/product" style={styles.linkContainer}>
            <div style={styles.NewBoxContainer}>         
                <BsPlus size="4em" color='#EA3A60'/>
                <div>New <br/>Talk!</div>
            </div>
        </a>
        
    );
}