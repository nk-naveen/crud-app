import React from 'react';
import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
  } from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color="dark" dark  >
      <Container>
      <Nav >
      <NavItem className='d-flex justify-content-center'> 
        <NavbarBrand href="/" > CRUD Operation </NavbarBrand> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <strong>click here to add user</strong>
        <Link className="btn btn-primary" to="/add">Add User</Link>
      </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}
