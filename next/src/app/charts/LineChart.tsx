"use client";

import "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function LineChart() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First Dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1
            }
        ]
    };

    return (
        <div className="w-auto">
            <Line data={data} />
        </div>
    );
}