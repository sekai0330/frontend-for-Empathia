import React, { Component, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)



export default function DashboardGraph({ userDataList }) {
    const userScores = []
    userDataList && userDataList.forEach((userData) => {userScores.push(userData.scores)})

    const data = {
        labels: [...Array(userDataList ? userDataList.length : 0 ).keys()],

        datasets: [
            {
                data: userScores.reverse(),
                backgroundColor: "#000000",
                borderColor: '#EA3A60',
                // pointBorderColor: '#2ABDF3',
                pointBorderWidth: 4,
                // hoverBorderColor : "#000",
                tension: 0.4
            }
        ]
    }

    const options = {
        plugin: {
            legend: false,
            autocolors: false,
            
        },
        scales: {
            x: {
                display: false
            },
            y: {
                display: true,
                min: 0,
                max:  100,
                ticks: {
                    beginAtZero: true,
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    };
    return (
    <div>
        
        <Line data={data} options={options}></Line>
    </div>
    )
}

