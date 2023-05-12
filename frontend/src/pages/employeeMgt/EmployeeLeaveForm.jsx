import React, { Component, useEffect } from "react";
import { Container} from 'reactstrap'
import axios from "axios";
import {useFormik} from 'formik'
import {useParams} from 'react-router-dom'
import '../../Styles/employee/EmployeeForm.css'
import '../../Styles/schedule/schedule.css'
import '../../App.css'

import { Form, Button, Col, Row } from "react-bootstrap";
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'

const EmployeeLeaveForm = () => {

  const params = useParams();

    const validate = values => {
      const errors = {};

      if (!values.role) {
        errors.role = "*Required";
      }
      if (!values.leaveType) {
        errors.leaveType = "*Required";
      }
      if (!values.leaveFrom) {
        errors.leaveFrom = "*Required";
      }
      if (!values.leaveTo) {
        errors.leaveTo = "*Required";
      }
      return errors;
    }

    const formik = useFormik({
      initialValues: {
        firstName: "",
        role: "",
        leaveType: "",
        leaveFrom: "",
        leaveTo: "",
        leaveStatus: "Not approved"

      },
      validate,
      onSubmit: async(values) => {
        
        showLoadingSpinner();

        try{
            const response = await fetch(`http://localhost:5000/employeeLeave/addEmployeeLeave`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values),
            });
            if(response.ok){
              hideLoadingSpinner();
              window.alert('Data has been inserted successfully');
              window.location = "http://localhost:3000/employeeDashboard";
              console.log('Successfully added to list');
            }else{
              console.error('Failed to submit form:', response.status, response.statusText);
            }
          }catch(error){
            console.error('Error submitting form:', error);
          }
      }

    });

    return (
      <body id='Body'>
      <section className="employeeForm">
      <div className='form'>
        <h2 className="title code">Employee Leave Application</h2>
        <div id="role-form-outer-div">
          <Form id="form" onSubmit={formik.handleSubmit}>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  First Name
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Employee Name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    readOnly
                  />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Role
                </Form.Label>
                <Col sm={10} className="form-input">
                    <Form.Control
                    type="text"
                    name="role"
                    placeholder="Role"
                    onChange={formik.handleChange}
                    value={formik.values.role}
                    readOnly
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Leave Type
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  as="select"
                  name="leaveType"
                  onChange={formik.handleChange}
                  value={formik.values.leaveType}
                  onBlur={formik.handleBlur}
                  required
                >
                  <option selected>
                    Select your option
                  </option>
                  <option value="annual">Annual</option>
                  <option value="medical">Medical</option>
                  <option value="casual">Casual</option>
                </Form.Control>
                {formik.touched.leaveType && formik.errors.leaveType ? <div className="error">{formik.errors.leaveType}</div>: null}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Leave From
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="month"
                  name="leaveFrom"
                  placeholder="From Date"
                  onChange={formik.handleChange}
                  value={formik.values.leaveFrom}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.leaveFrom && formik.errors.leaveFrom ? <div className="error">{formik.errors.leaveFrom}</div>: null}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Leave To
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="month"
                  name="leaveTo"
                  placeholder="To Date"
                  onChange={formik.handleChange}
                  value={formik.values.leaveTo}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.leaveTo && formik.errors.leaveTo ? <div className="error">{formik.errors.leaveTo}</div>: null}
              </Col>
            </Form.Group>
        
            <Form.Group as={Row} id="form-submit-button">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button disabled={formik.isSubmitting} type="submit">{formik.isSubmitting ? 'Submitting' : 'Submit'}</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} id="form-cancel-button">
              <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
                <Button type="reset">
                  cancel
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
      </section>
      </body>
    );
  }

export default EmployeeLeaveForm;
