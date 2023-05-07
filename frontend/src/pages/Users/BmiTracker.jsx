import "./Style/BmiTracker.css";
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [healthTips, setHealthTips] = useState('');

  const calculateBMI = () => {
    if (!height || !weight) return;
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue);
    sendBMI(bmiValue);
  };

  const sendBMI = async (bmiValue) => {
    try {
      const response = await axios.post('https://api.openai.com/v1/engine/eng-YOUR_ENGINE_ID/completions', {
        prompt: `Give me some health tips for someone with a BMI of ${bmiValue.toFixed(1)}.`,
        max_tokens: 60,
        temperature: 0.5,
        n: 1,
        stop: '\n',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`,
        },
      });
      const healthTipsText = response.data.choices[0].text.trim();
      setHealthTips(healthTipsText);
      console.log('Response from ChatGPT:', healthTipsText);
    } catch (error) {
      console.error('Error getting health tips from ChatGPT:', error);
    }
  };
  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <label>Height (in cm):</label>
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      <br />
      <label>Weight (in kg):</label>
      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi.toFixed(1)}</p>}
      {healthTips && <p>{healthTips}</p>}
    </div>
  );
}

export default App;
