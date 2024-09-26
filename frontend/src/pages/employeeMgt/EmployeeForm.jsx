import React, { Component, useState } from "react";
import { Container} from 'reactstrap'
import Axios from 'axios';
import {useFormik} from 'formik'
import '../../Styles/employee/EmployeeForm.css'
import '../../App.css'

import { Form, Button, Col, Row } from "react-bootstrap";
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'


const API_URL = 'http://localhost:5000/employee';

  const EmployeeForm = () => {

    const validate = values => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "*Required";
      }
      if (!values.lastName) {
        errors.lastName = "*Required";
      }
      if (!values.NIC) {
        errors.NIC = "*Required";
      }
      if (!values.role) {
        errors.role = "*Required";
      }
      if (!values.gender) {
        errors.gender = "*Required";
      }
      if (!values.DOB) {
        errors.DOB = "*Required";
      }

      if (!values.contactNo) {
        errors.contactNo = "*Required";
      }else if(values.contactNo.length < 10 || values.contactNo.length > 10){
        errors.contactNo = "*Must be 10 digits";
      }else if (!/^\d+$/.test(values.contactNo)) {
        errors.contactNo = "*Contact number must contain only digits";
      }

      if (!values.email) {
        errors.email = "*Required";
      }else if(values.email.length < 4){
        errors.email = "*Must be 5 characters or more";
      }else if (values.email.indexOf('@') === -1) {
        errors.email = "*Must contain an '@' symbol";
      }

      if (!values.address) {
        errors.address = "*Required";
      }
      if (!values.qualifications) {
        errors.qualifications = "*Required";
      }
      if (!values.joinedDate) {
        errors.joinedDate = "*Required";
      }
      if (!values.terminateDate) {
        errors.terminateDate = "*Required";
      }
      return errors;
    }
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        NIC: "",
        role: "",
        gender: "",
        DOB: "",
        contactNo: "",
        email: "",
        address: "",
        qualifications: "",
        // image: null,
        joinedDate: "",
        terminateDate: ""
      },
      validate,
      onSubmit: async(values) => {

        showLoadingSpinner();

        try{
          const response = await fetch(`http://localhost:5000/employee/addEmployee`, {
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
      <div className="form">
        <h2 className="title code">Employee Registration</h2>
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
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.firstName && formik.errors.firstName ? <div className="error">{formik.errors.firstName}</div>: null}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Last Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.lastName && formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div>: null}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                NIC
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  name="NIC"
                  placeholder="NIC"
                  onChange={formik.handleChange}
                  value={formik.values.NIC}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.NIC && formik.errors.NIC ? <div className="error">{formik.errors.NIC}</div>: null}
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Role
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  as="select"
                  name="role"
                  onChange={formik.handleChange}
                  value={formik.values.role}
                  onBlur={formik.handleBlur}
                  required
                >
                  <option selected>
                    Select your option
                  </option>
                  <option value="cleaner">Cleaner</option>
                  <option value="cashier">Cashier</option>
                  <option value="operation manager">Opertion Manager</option>
                  <option value="fitness instructor">Fitness Instructor</option>
                  <option value="customer service manager">Customer Service Manager</option>
                  <option value="membership manager">Memebership Manager</option>
                  <option value="payment manager">Payment Manager</option>
                  <option value="supplier manager">Supplier Manager</option>
                </Form.Control>
                {formik.touched.role && formik.errors.role ? <div className="error">{formik.errors.role}</div>: null}
              </Col>
            </Form.Group>
            {/* <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Department
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  as="select"
                  name="department"
                  required
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="operation">Operation</option>
                  <option value="customer service">Customer Service</option>
                  <option value="membership">Memebership</option>
                  <option value="payment">Payment</option>
                  <option value="supplier">Supplier</option>
                </Form.Control>
              </Col>
            </Form.Group> */}
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Gender
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  inline
                  type="radio"
                  label="Male"
                  value="male"
                  name="gender"
                  checked={formik.values.gender === "male"}
                  onChange={formik.handleChange}
                  required
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  value="female"
                  name="gender"
                  checked={formik.values.gender === "female"}
                  onChange={formik.handleChange}
                  required
                />
                {formik.touched.gender && formik.errors.gender ? <div className="error">{formik.errors.gender}</div>: null}
              </Col>
            </Form.Group>
           
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                DOB
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  name="DOB"
                  placeholder="DOB"
                  onChange={formik.handleChange}
                  value={formik.values.DOB}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.DOB && formik.errors.DOB ? <div className="error">{formik.errors.DOB}</div>: null}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Contact No
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  name="contactNo"
                  placeholder="Contact No "
                  onChange={formik.handleChange}
                  value={formik.values.contactNo}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.contactNo && formik.errors.contactNo ? <div className="error">{formik.errors.contactNo}</div>: null}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div>: null}
              </Col>
            </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    Address
                  </Form.Label>
                  <Col sm={10} className="form-input">
                    <Form.Control
                      type="text"
                      name="address"
                      placeholder="Address"
                      onChange={(event) => {
                        const sanitizedValue = event.target.value.replace(/[^a-zA-Z0-9\s,.-]/g, ''); 
                        formik.setFieldValue("address", sanitizedValue);
                      }}
                      value={formik.values.address}
                      onBlur={formik.handleBlur}
                      required
                    />
                    {formik.touched.address && formik.errors.address ? <div className="error">{formik.errors.address}</div> : null}
                  </Col>
                </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Qualifications
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control 
                  as="textarea" 
                  rows={3}
                  name="qualifications"
                  placeholder="Qualifications"
                  onChange={formik.handleChange}
                  value={formik.values.qualifications}
                  onBlur={formik.handleBlur} 
                  required
                />
                {formik.touched.qualifications && formik.errors.qualifications ? <div className="error">{formik.errors.qualifications}</div>: null}
              </Col>
            </Form.Group>
            {/* <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Upload Image
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control 
                  type="file"
                  name="image"
                  onChange={(event) => {
                    formik.setFieldValue("image", event.currentTarget.files[0]);
                  }}
                />
              </Col>
            </Form.Group> */}
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Date Of Joining
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  name="joinedDate"
                  placeholder="Date Of Joining"
                  onChange={formik.handleChange}
                  value={formik.values.joinedDate}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.joinedDate && formik.errors.joinedDate ? <div className="error">{formik.errors.joinedDate}</div>: null}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Terminate Date
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  name="terminateDate"
                  placeholder="Terminate Date"
                  onChange={formik.handleChange}
                  value={formik.values.terminateDate}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.terminateDate && formik.errors.terminateDate ? <div className="error">{formik.errors.terminateDate}</div>: null}
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
                  Reset
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

export default EmployeeForm;
