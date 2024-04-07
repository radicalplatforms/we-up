import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function WakeupChart() {
    
    const options = {
        chart: {
            height: "100%",
            maxWidth: "100%",
            type: "line",
            fontFamily: "Inter, sans-serif",
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 4,
            colors: ["#FFA41B"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        tooltip: {
            theme: 'dark',
        },
        series: [
            {
                name: 'User 1',
                data: ['06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00'], // Mock wakeup times
                color: '#FFA41B'
            },
            {
                name: 'User 2',
                data: ['06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30'], // Mock wakeup times
                color: '#FF1E56'
            },
            // Add more series for more users
        ],
        legend: {
            show: true,
            labels: {
                colors: '#fff',
                useSeriesColors: false
            },
            markers: {
                fillColors: ['#FFA41B', '#FF1E56'] // Add more colors for more users
            }
        },
        xaxis: {
            tooltip: {
                enabled: false
            },
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            labels: {
                show: true,
                style: {
                    colors: '#000', // Change color to black
                    fontSize: '14px',
                    fontFamily: "Inter, sans-serif",
                },
            },
            title: {
                text: 'Days of the Week',
                style: {
                    color: '#000', // Change color to black
                    fontSize: '16px',
                    fontFamily: "Inter, sans-serif",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#000', // Change color to black
                    fontSize: '14px',
                    fontFamily: "Inter, sans-serif",
                },
            },
            title: {
                text: 'Time Woken Up',
                style: {
                    color: '#000', // Change color to black
                    fontSize: '16px',
                    fontFamily: "Inter, sans-serif",
                },
            },
        },
  }
  
  useEffect(() => {
    let chart: ApexCharts;
    if (typeof window !== 'undefined') {
        chart = new ApexCharts(document.querySelector("#line-chart"), options);
        chart.render();
    }

    // Cleanup function to destroy the chart
    return () => {
        if (chart) {
            chart.destroy();
        }
    };
}, []);
  
    return (
        <div className="w-full h-96 bg-white border-2 border-gray-300 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div id="line-chart" className="w-full h-full"></div>
        </div>
    );
}