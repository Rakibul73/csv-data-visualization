// src/PieChart.js
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://csv-data-visualization-backend.onrender.com/data_without_pagination')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const tradeCodeCounts = data.reduce((acc, curr) => {
        acc[curr.trade_code] = (acc[curr.trade_code] || 0) + 1;
        return acc;
    }, {});

    const pieData = {
        labels: Object.keys(tradeCodeCounts),
        datasets: [
            {
                data: Object.values(tradeCodeCounts),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hide the default legend
            },
            tooltip: {
                bodyFont: {
                    size: 12,
                },
            },
        },
        layout: {
            padding: {
                top: 100, // Adjust this to give space for the legend
            },
        },
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '70vh' 
        }}>
            <div style={{ 
                width: '50vw', 
                height: '50vw', 
                maxWidth: '500px', 
                maxHeight: '500px' 
            }}>
                <Pie data={pieData} options={options} />
            </div>
        </div>
    );
    
};

export default PieChart;
