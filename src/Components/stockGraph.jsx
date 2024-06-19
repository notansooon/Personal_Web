import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, TimeScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';
import './styles.css'; // Optional CSS file for custom styling


ChartJS.register(
    CategoryScale,
    LinearScale,
    TimeScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const StockMarketGraph = () => {
    const [stockSymbol, setStockSymbol] = useState('AAPL'); // Default stock symbol
    const [stockData, setStockData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Replace 'YOUR_API_KEY' with your actual Alpha Vantage API key
    const apiKey = 'XQYBPVM4RIHWIHYQ';

    // Function to fetch live stock data
    const fetchStockData = async () => {
        setLoading(true);
        setError(null);

        try {
            const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=1min&apikey=${apiKey}`;

            const response = await axios.get(apiUrl);
            const timeseries = response.data['Time Series (1min)'];
            const dataPoints = Object.entries(timeseries).map(([timestamp, data]) => ({
                x: new Date(timestamp),
                y: parseFloat(data['4. close']),
            }));

            setStockData(dataPoints.reverse()); // Reverse for latest data at the end
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Fetch data on component mount and on symbol change
    useEffect(() => {
        fetchStockData();
    }, [stockSymbol]);

    const chartOptions = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'minute',
                    displayFormats: {
                        minute: 'HH:mm',
                    },
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    const chartData = {
        labels: stockData.map(point => point.x),
        datasets: [{
            label: stockSymbol,
            data: stockData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            pointRadius: 1,
            parsing: false
        }],
    };

    // Handle user input for stock symbol
    const handleSymbolChange = (event) => {
        setStockSymbol(event.target.value.toUpperCase());
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Live Stock Market Graph</h2>

            {loading && (
                <p className="text-center mb-4">Loading data...</p>
            )}

            {error && (
                <p className="text-red-500 text-center mb-4">Error: {error}</p>
            )}

            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    className="rounded-md border border-gray-300 p-2 focus:outline-none"
                    placeholder="Enter Stock Symbol (e.g., AAPL)"
                    value={stockSymbol}
                    onChange={handleSymbolChange}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none"
                    onClick={fetchStockData}
                >
                    Refresh
                </button>
            </div>

            <div className="chart-container">
                {!loading && !error && (
                    <Line data={chartData} options={chartOptions} />
                )}
            </div>
        </div>
    );
};

export default StockMarketGraph;

