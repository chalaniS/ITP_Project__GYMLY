import React from "react";
import "../../Styles/employee/NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../images/logo.png";
import Switch from "react-switch";

const NavBar = (props) => {
  return (
    <div>
      {/* <nav id="main-nav">
        <img src={Logo} alt="" />
        <h3 className="navBar-username">Logout</h3>
        <h3 className="navBar-username">{props.loginInfo["Role"]}</h3>
      </nav> */}
      <Navbar bg="light" expand="lg" className="nav-bar" fixed="top" id="main-nav">
        <Navbar.Brand id="logo-anchor">
          <img id="nav-bar-logo" src={Logo} alt="" />
          <span id="toggle-switch">
            <Switch
              checked={props.checked}
              onChange={props.handleChange}
              onColor="#404e67"
              onHandleColor="#ffffff"
              handleDiameter={10}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={17}
              width={35}
              className="react-switch"
              id="material-switch"
            />
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="logout-navbar-nav">
          <Nav className="ml-auto">
            <a onClick={props.onClick} className="navbar-right-content">
              {props.loginInfo["Name"]}
            </a>
            <a
              onClick={props.onLogout}
              style={{ cursor: "pointer" }}
              className="navbar-right-content"
            >
              Log Out
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Navbar id="main-nav">
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
};

export default NavBar;
