import "chart.js/auto";
import { reverse } from "dns";
import { Line } from "react-chartjs-2";

export default function LineChart() {
    const data = {
        labels: ["4/1", "4/2", "4/3", "4/4", "4/5", "4/6", "4/7"],
        datasets: [
            {
                label: "Wake Up Time for Week",
                data: [6, 7, 6, 7, 6, 7, 8],
                fill: false,
                borderColor: "rgb(28, 100, 242)",
                tension: 0.5,  // Increase this value to make the curve smoother
                pointRadius: 2,  // Make the point for the current day larger
                pointHoverRadius: 2,
            },
            {
                label: "Today",
                data: [null, null, null, null, null, null, 8],  // Only the last day has a data point
                fill: false,
                borderColor: "rgb(28, 100, 242)",  // Use a different color for the current day
                pointRadius: 7,  // Make the point for the current day larger
                pointHoverRadius: 7,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            }
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false
                },
            },
            y: {
                display: true,
                reverse: true,
                grid: {
                    display: false
                },
                ticks: {
                    color: 'gray',
                    beginAtZero: true,
                    max: 15,
                    stepSize: 1,
                    callback: function(value: any) {
                        return value + 'a';
                    }
                }
            }
        }
    };

    return (
        <div className="w-auto p-4">
            <Line data={data} options={{ ...options, plugins: { ...options.plugins } }} />
        </div>
    );
}