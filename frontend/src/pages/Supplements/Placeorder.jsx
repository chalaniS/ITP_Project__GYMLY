import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { AiFillCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import Axios from "axios";
import {
  showLoadingSpinner,
  hideLoadingSpinner,
} from "../../Components/Loading/loading.js";
import { parseISO, format } from "date-fns";
import "../../Styles/schedule/Supplements/Placeorder.css";
import pic1 from "../../images/Supplements/img(8).jpg";
import { eventNames } from "process";

const API_URL = "http://localhost:5000/Supplements";

const Placeorder = () => {
  const [userId, setUserId] = useState("");
  const [Supplement_Date, setSupplementDate] = useState(new Date());
  const [Supplement_Quantity, setSupplementQuantity] = useState("");
  const [Supplement_Type, setSupplementType] = useState("");
  const [Supplement_Id, setSupplementId] = useState("");

  const handleFormSubmit = async () => {
    showLoadingSpinner();

    try {
      Axios.post(API_URL, {
        userId: "4582146#23669545",
        Supplement_Date: Supplement_Date,
        Supplement_Quantity: Supplement_Quantity,
        Supplement_Type: Supplement_Type,
        Supplement_Id: Supplement_Id,
      });

      hideLoadingSpinner();
      window.alert("Data has been updated successfully");
      window.location = "http://localhost:3000/Orderread";
      console.log("Successfully added to list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <body>
        <section>
          <Container>
            <div class="gallery">
              <a
                target="_blank"
                href="C:\ITP\ITP_Project__GYMLY\frontend\src\images\Supplements\img(8).jpg"
              >
                <img src={pic1} alt="Sup" width="600" height="400" />
              </a>
            </div>

            <div className="form">
              <div className="title code">place your order</div>

              <div className="inputs">
                <form onSubmit={handleFormSubmit}>
                  <Row>
                    <Col lg="4">
                      <label for="day">Select Date :</label>
                    </Col>

                    <Col>
                      <input
                        type="date"
                        className="calender"
                        onChange={(event) =>
                          setSupplementDate(event.target.value)
                        }
                        value={Supplement_Date}
                        required
                      />
                    </Col>
                  </Row>

                  <br />
                  <Row>
                    <Col lg="4">
                      <label for="timeslot">Select supplement amount:</label>
                    </Col>
                    <Col>
                      <div className="select">
                        <select
                          name="supplement amount"
                          className="supplement amount"
                          onChange={(event) =>
                            setSupplementQuantity(event.target.value)
                          }
                          value={Supplement_Quantity}
                          required
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col lg="4">
                      <label for="timeslot">Select supplement type:</label>
                    </Col>
                    <Col>
                      {/* Should change with payment id */}
                      <div className="select">
                        <select
                          name="supplement type"
                          className="supplement type"
                          onChange={(event) =>
                            setSupplementType(event.target.value)
                          }
                          value={Supplement_Type}
                          required
                        >
                          <option value="Whey protein">Whey protein</option>
                          <option value="Casein protein">Casein protein</option>
                          <option value="Milk protein">Milk protein</option>
                        </select>
                      </div>
                    </Col>

                    <Col lg="4">
                      <label for="timeslot">Select supplement Id:</label>
                    </Col>

                    <Col>
                      {/* Should change with payment id */}
                      <div className="select">
                        <select
                          name="supplement Id"
                          className="supplement Id"
                          onChange={(event) =>
                            setSupplementId(event.target.value)
                          }
                          value={Supplement_Id}
                          required
                        >
                          <option value="0001">0001</option>
                          <option value="0002">0002</option>
                          <option value="0003">0003</option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  <br />

                  <br />
                  <Row>
                    <Col lg="10" className="cancel">
                      <button type="submit" className="secondary__btn ">
                        Submit
                      </button>
                    </Col>
                    <Col>
                      <button type="cancel" className="primary__btn submit">
                        cancel
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Container>
        </section>
      </body>
    </>
  );
};

export default Placeorder;
