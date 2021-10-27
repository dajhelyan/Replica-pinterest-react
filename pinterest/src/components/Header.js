import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export const Header = ({ children }) => {
  return (
    <Navbar bg="light" expand="lg" style={{ borderBottom: "groove" }}>
      <img
        src="/images/pinterest.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <span style={{marginLeft: "12px"}}><h5>Pinterest</h5></span>
      <Navbar.Collapse id="basic-navbar-nav">
        {
          children
        }
        {/* <Button style={{marginRight: "10px"}} variant="danger">Registrarse</Button>
        <Button variant="secondary">Iniciar sesión</Button> */}
        <Button variant="outline-secondary" style={{marginLeft: "10px", borderRadius: "29px",borderColor: "white"}}><i className="fas fa-ellipsis-h"></i></Button>
      </Navbar.Collapse>
    </Navbar>
  )
}