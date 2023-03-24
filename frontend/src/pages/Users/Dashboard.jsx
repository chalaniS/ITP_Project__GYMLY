import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

import './Style/Dashboard.css'

const Dashboard = () => {
    return (
      <div >
      <h1 className="text-center" id="dashboard-title">Dash Board</h1>
       
       <div className="Container text-center" id="cards">
        <div className="row">
            <div className="col">
                <div className="dsbd-cards">
                  Hello
                </div>
            </div>

            <div className="col">
            <div className="dsbd-cards">
                  Hello
                </div>
            </div>

            <div className="col">
            <div className="dsbd-cards">
                  Hello
                </div>
            </div>

            <div className="col">
            <div className="dsbd-cards">
                  Hello
                </div>
            </div>

            
          </div>
        </div>
      </div>
    )
  }

  export default Dashboard;