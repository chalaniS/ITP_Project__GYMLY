import React, { useState } from "react";
import "./Style/BmiTracker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

const BmiTracker = () => {
    const [bmi, setBmi] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmiHistory, setBmiHistory] = useState([]);
    
    const calculateBmi = () => {
        const bmi = weight / (height * height);
        setBmi(bmi);
        setBmiHistory([...bmiHistory, bmi]);
    };
    
    return (
        <div>
        <h1>BMI Tracker</h1>
        <div>
            <label>Height</label>
            <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            />
        </div>

        <div>
            <label>Weight</label>
            <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            />
        </div>
        
        <button onClick={calculateBmi}>Calculate</button>
        <div>
            <p>BMI: {bmi}</p>
        </div>
        <div>
            <h3>BMI History</h3>
            <ul>
            {bmiHistory.map((bmi, index) => (
                <li key={index}>{bmi}</li>
            ))}
            </ul>
        </div>
        </div>
    );
    }

export default BmiTracker;