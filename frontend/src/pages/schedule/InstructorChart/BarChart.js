import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {

    return <div className='barchart'>
        <div style={{ width: 900 }}>
            <Bar data={chartData} />
        </div>
    </div>
}

export default BarChart