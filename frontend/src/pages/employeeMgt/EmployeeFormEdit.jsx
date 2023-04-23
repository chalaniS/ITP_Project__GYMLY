import React, { Component, useState, useEffect } from "react";
import { Container} from 'reactstrap'
import axios from 'axios';
import {useFormik} from 'formik'
import {useParams} from 'react-router-dom'
import '../../Styles/employee/EmployeeForm.css'
import '../../Styles/schedule/schedule.css'
import '../../App.css'

import { Form, Button, Col, Row } from "react-bootstrap";
import { showLoadingSpinner, hideLoadingSpinner } from '../../Components/Loading/Loading.js'

  const EmployeeFormEdit = () => {

    const params = useParams();

    const validate = values => {
      const errors = {};

      if(values.contactNo.length < 10){
        errors.contactNo = "*Must be 10 digits";
      }else if (!/^\d+$/.test(values.contactNo)) {
        errors.contactNo = "*Contact number must contain only digits";
      }

      if(values.email.length < 4){
        errors.email = "*Must be 5 characters or more";
      }else if (values.email.indexOf('@') === -1) {
        errors.email = "*Must contain an '@' symbol";
      }
      return errors;
    }

    const getEmployeeDetails = async() => {
      console.warn(params)
      let result = await fetch(`http://localhost:5000/employee/getEmployee/${params.id}`);
      result = await result.json();
      console.warn(result)

      formik.setValues({
        firstName: result.firstName,
        lastName: result.lastName,
        NIC: result.NIC,
        role: result.role,
        gender: result.gender,
        DOB: result.DOB.substr(0, 10),
        contactNo: result.contactNo,
        email: result.email,
        address: result.address,
        qualifications: result.qualifications,
        joinedDate: result.joinedDate.substr(0, 10),
        terminateDate: result.terminateDate.substr(0, 10),
      });

    }

    useEffect(()=>{
      getEmployeeDetails();
    },[])

    const updateEmployee = async(data) => {
      showLoadingSpinner();
      console.warn(data)
      let result = await fetch(`http://localhost:5000/employee/updateEmployee/${params.id}`,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      result = await result.json()
      console.warn(result)
      if(result){
        hideLoadingSpinner();
        window.alert('Data has been updated successfully');
        window.location = "http://localhost:3000/employeeDashboard";
      }
    }

    const formik = useFormik({

      //enableReinitialize: true,
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
        terminateDate: "",
      },
      validate,
      onSubmit: () => {
        updateEmployee(formik.values)
      }
      
    });

    return (
      <body id='Body'>
      <section className="employeeForm">
      <div className="form">
        <h2 className="title code">Update Employee Details</h2>
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
                />
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
                />
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
                />
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
                >
                  <option selected>
                    Select your option
                  </option>
                  <option value="cleaner">Cleaner</option>
                  <option value="cashier">Cashier</option>
                  <option value="operation manager">Opertion Manager</option>
                  <option value="fitness instructor">Fitness Instructor</option>
                  <option value="customer service">Customer Service Manager</option>
                  <option value="membership manager">Memebership Manager</option>
                  <option value="payment manager">Payment Manager</option>
                  <option value="supplier manager">Supplier Manager</option>
                </Form.Control>
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
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Female"
                  value="female"
                  name="gender"
                  checked={formik.values.gender === "female"}
                  onChange={formik.handleChange}
                />
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
                />
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
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
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
                />
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
                />
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
                />
              </Col>
            </Form.Group>



            <Form.Group as={Row} id="form-submit-button">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button disabled={formik.isSubmitting} type="submit">{formik.isSubmitting ? 'Updating' : 'Update'}</Button>
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

export default EmployeeFormEdit;
