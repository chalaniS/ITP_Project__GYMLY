import "./Style/BmiTracker.css";
import React, { useState } from 'react';
import * as Icons from 'react-bootstrap-icons';
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
const { Configuration, OpenAIApi } = require("openai");



const BMITracker = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [healthTips, setHealthTips] = useState('');

      // Retrieve token and userId values from localStorage
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

    //get user details from backend using token and userId
    const [user, setUser] = useState([])
    

    //get user details from backend using token and userId
    useEffect(() => {
      fetch(`http://localhost:5002/users/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error(error));
    }, [userId, token]);
    
    //get user details from backend using token and userId
    console.log(user);

    //set weight and height to weight and height of the user
    useEffect(() => {
      setWeight(user.Weight);
      setHeight(user.Height);
    }, [user]);
  

    console.log(weight, height);

  // const getWeight = async () => {
  const calculateBMI = () => {
    if (!height || !weight) return;
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue);
    sendBMI(bmiValue);
  };

  console.log(bmi);

  //call to openAI to get health tips
  const sendBMI = async (bmiValue) => {
    try {
      const configuration = new Configuration({
        apiKey: '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',
      });
     const openai = new OpenAIApi(configuration);
     const response = await openai.createCompletion({
     model: "text-davinci-003",
     prompt: "Give specific healthy tips accroding to the BMI value\n\nBMI level of user : " + bmiValue + "\n\nTips:",
     max_tokens: 100,
     temperature: 0,});
        const healthTipsText = response.data.choices[0].text.trim();
        setHealthTips(healthTipsText);
        console.log('Response from OpenAI:', healthTipsText);
      } catch (error) {
      console.error('Error getting health tips from OpenAI:', error);
      }
  };


  return (
    <div className="container-fluid" id="bmi-body">
      <div id="bmi-form">
          <div className="text-center" id="bmi-title">BMI Tracker</div>
      <br />
        <div id="showHeightandWeight" className="text-center">
        <div id="details"> <Icons.ArrowUpCircleFill /> Your Weight is {weight} kg</div>
        <div id="details"> <Icons.CalendarFill/> Your Height is {height} cm</div>
        <div id="bmiBTN-section">
          <button onClick={calculateBMI} id="bmiBTN">How is my BMI?</button>
        </div>
        </div>
        <br />
          <div className="container" id="bmi-input">
            {bmi && <div id="bmiLevel" className="text-center"  >Your BMI is: {bmi.toFixed(1)}</div>}
          </div>
          {healthTips && <div id="bmi-tips" className=" container text-center">{healthTips}</div>}
    </div>
    </div>
  );
}

export default BMITracker;
