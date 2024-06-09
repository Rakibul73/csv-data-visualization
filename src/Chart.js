import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {
    const [data, setData] = useState([]);
    const [tradeCode, setTradeCode] = useState("");

    useEffect(() => {
        fetch("https://csv-data-visualization-backend.onrender.com/data_without_pagination")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    const filteredData = data.filter((d) => d.trade_code === tradeCode);

    const lineData = {
        labels: filteredData.map((d) => d.date),
        datasets: [
            {
                label: "Close",
                data: filteredData.map((d) => d.close),
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                yAxisID: "y",
            },
        ],
    };

    const barData = {
        labels: filteredData.map((d) => d.date),
        datasets: [
            {
                label: "Volume",
                data: filteredData.map((d) => d.volume),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                yAxisID: "y1",
            },
        ],
    };

    return (
        <div>
            <select onChange={(e) => setTradeCode(e.target.value)}>
                <option value="">Select Trade Code</option>
                {[...new Set(data.map((d) => d.trade_code))].map((code) => (
                    <option key={code} value={code}>
                        {code}
                    </option>
                ))}
            </select>
            <Line
                data={lineData}
                options={{
                    responsive: true,
                    interaction: {
                        mode: "index",
                        intersect: false,
                    },
                    scales: {
                        y: {
                            type: "linear",
                            display: true,
                            position: "left",
                        },
                        y1: {
                            type: "linear",
                            display: true,
                            position: "right",
                            grid: {
                                drawOnChartArea: false,
                            },
                        },
                    },
                }}
            />
            <Bar
                data={barData}
                options={{
                    responsive: true,
                    interaction: {
                        mode: "index",
                        intersect: false,
                    },
                    scales: {
                        y: {
                            type: "linear",
                            display: true,
                            position: "left",
                        },
                        y1: {
                            type: "linear",
                            display: true,
                            position: "right",
                            grid: {
                                drawOnChartArea: false,
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default Chart;
