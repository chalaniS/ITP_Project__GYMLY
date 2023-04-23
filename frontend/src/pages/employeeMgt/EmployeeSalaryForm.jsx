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

const EmployeeSalaryForm = () => {

  const params = useParams();

    const validate = values => {
      const errors = {};

      if (!values.salaryMonth) {
        errors.salaryMonth = "*Required";
      }
      if (!values.basicSalary) {
        errors.basicSalary = "*Required";
      }else if (!/^\d+$/.test(values.basicSalary)) {
        errors.basicSalary = "*Invalid input";
      }
      if (!values.otHours) {
        errors.otHours = "*Required";
      }else if (!/^\d+$/.test(values.otHours)) {
        errors.otHours = "*Invalid input";
      }
      if (!values.otRate) {
        errors.otRate = "*Required";
      }else if (!/^\d+$/.test(values.otRate)) {
        errors.otRate = "*Invalid input";
      }
      if (!values.bonus) {
        errors.bonus = "*Required";
      }else if (!/^\d+$/.test(values.bonus)) {
        errors.bonus = "*Invalid input";
      }

      return errors;
    }

    const getEmployeeSalaryDetails = async() => {
      console.warn(params)
      let result = await fetch(`http://localhost:5000/employeeSalary/${params.id}`);
      result = await result.json();
      console.warn(result)

      formik.setValues({
        empId: result.empId,
        basicSal: result.basicSal,
        otHours: result.otHours,
        otRate: result.otRate,
        bonus: result.bonus,
        month: result.month.substr(0, 10)
      });

    }

    useEffect(()=>{
      getEmployeeSalaryDetails();
    },[])

    const updateEmployeeSalary = async(data) => {
      showLoadingSpinner();
      console.warn(data)
      let result = await fetch(`http://localhost:5000/employeeSalary/${params.id}`,{
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
      initialValues: {
        empID: "",
        salaryMonth: "",
        basicSalary: "",
        otHours: "",
        otRate: "",
        otTotal: "",
        bonus: ""
      },
      validate,
      onSubmit: async(values) => {
        updateEmployeeSalary(formik.values)
      }
    });

    return (
      <body id='Body'>
      <section className="employeeForm">
      <div className='form'>
        <h2 className="title code">Employee Salary Assignment</h2>
        <div id="role-form-outer-div">
          <Form id="form" onSubmit={formik.handleSubmit}>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                  Employee ID
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="text"
                    name="empID"
                    placeholder="Employee ID"
                    onChange={formik.handleChange}
                    value={formik.values.empID}
                    // onBlur={formik.handleBlur}
                    readOnly
                    // required
                  />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Select Month
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="month"
                  name="salaryMonth"
                  placeholder="Month"
                  onChange={formik.handleChange}
                  value={formik.values.salaryMonth}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.salaryMonth && formik.errors.salaryMonth ? <div className="error">{formik.errors.salaryMonth}</div>: null}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Basic Salary
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="number"
                  name="basicSalary"
                  placeholder="Basic Salary"
                  onChange={formik.handleChange}
                  value={formik.values.basicSalary}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.basicSalary && formik.errors.basicSalary ? <div className="error">{formik.errors.basicSalary}</div>: null}
              </Col>
            </Form.Group>
     
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              OT Hours
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  name="otHours"
                  placeholder="OT Hours"
                  onChange={formik.handleChange}
                  value={formik.values.otHours}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.otHours && formik.errors.otHours ? <div className="error">{formik.errors.otHours}</div>: null}
              </Col>
            </Form.Group>
     
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              OT Rate
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  name="otRate"
                  placeholder="OT Rate"
                  onChange={formik.handleChange}
                  value={formik.values.otRate}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.otRate && formik.errors.otRate ? <div className="error">{formik.errors.otRate}</div>: null}
              </Col>
            </Form.Group>
     
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              OT Total
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  name="otTotal"
                  placeholder="OT Total"
                  onChange={formik.handleChange}
                  value={formik.values.otTotal}
                  //onBlur={formik.handleBlur}
                  readOnly
                  //required
                />
              </Col>
            </Form.Group>
     
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Bonus
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  name="bonus"
                  placeholder="Bonus"
                  onChange={formik.handleChange}
                  value={formik.values.bonus}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.bonus && formik.errors.bonus ? <div className="error">{formik.errors.bonus}</div>: null}
              </Col>
            </Form.Group>
        
            <Form.Group as={Row} id="form-submit-button">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
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

export default EmployeeSalaryForm;
