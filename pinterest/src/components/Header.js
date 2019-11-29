/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


export const Header = ({ children }) => {
  return (
    <Navbar bg="light" expand="lg" style={{ borderBottom: "groove" }}>
      <img
        src="/images/pinterest.png"
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <span style={{marginLeft: "12px"}}><h5>Pinterest</h5></span>
      <Navbar.Collapse id="basic-navbar-nav">
        {
          children
        }
        <Button style={{marginRight: "10px"}} variant="danger">Registrarse</Button>
        <Button variant="secondary">Iniciar sesión</Button>
        <Button variant="outline-secondary" style={{marginLeft: "10px", borderRadius: "29px",borderColor: "white"}}><i class="fas fa-ellipsis-h"></i></Button>
      </Navbar.Collapse>
    </Navbar>
  )
}