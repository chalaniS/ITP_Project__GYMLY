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

const Editorder = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [supplementtype, setsupplementtype] = useState("");
  const [supplementamount, setSupplementamount] = useState("");
  const [supplementId, setsupplementId] = useState("");
  const [alldata, setAlldata] = useState("");

  useEffect(() => {
    showLoadingSpinner();
    const fetchOrder = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:5000/Supplements/${id}`
        );
        setStartDate(parseISO(response.data.startDate));
        setsupplementtype(response.data.supplementType);
        setSupplementamount(response.data.supplementAmount);
        setsupplementId(response.data.supplementId);
        setAlldata(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching order:", error);
      }
      hideLoadingSpinner();
    };
    fetchOrder();
  }, [id]);
  
  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("In handleFormSubmit");
    console.log(startDate);
    showLoadingSpinner();

    // Send the updated data to the server using an API call
    Axios.put(`http://localhost:5000/Supplements/${id}`, {
      startDate :startDate,
      supplementtype: supplementtype,
      supplementamount: supplementamount,
      supplementId: supplementId
    })
      .then((response) => {
        console.log(response);
        hideLoadingSpinner();
        window.alert("Data has been updated successfully");
        window.location = "http://localhost:3000/Orderread";
        console.log("Successfully updated list");
      })
      .catch((error) => {
        console.log(error);
        console.log("error when update the data");
        window.alert("Data is not updated unsuccessfully");
        window.location.reload();
      });
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
              <div className="title code">Edit your order</div>

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
                        onChange={(event) => setStartDate(event.target.value)}
                        value={startDate}
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
                            setSupplementamount(event.target.value)
                          }
                          value={supplementamount}
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
                            setsupplementtype(event.target.value)
                          }
                          value={supplementtype}
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
                            setsupplementId(event.target.value)
                          }
                          value={supplementId}
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

export default Editorder;
