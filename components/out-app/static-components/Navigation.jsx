import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

function Navigation() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <Navbar bg="light" expand="lg" className="justify-content-between background-color-secondary">
      <Navbar.Brand href="#" onClick={() => handleNavigation('/')}>
        <img src="/logo.png" alt="Logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-lg-2"/>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="ml-auto flex-nowrap d-lg-none">
          <Button className="btn1 button-medium" variant="outline-primary" onClick={() => handleNavigation('/login')}>Login</Button>
          <Button className="btn2 button-medium" variant="outline-secondary" onClick={() => handleNavigation('/register')}>Register</Button>
        </Nav>
      </Navbar.Collapse>
      <Nav className="ml-auto flex-nowrap d-none d-lg-flex">
        <Button className="btn1 button-medium" variant="outline-primary" onClick={() => handleNavigation('/login')}>Login</Button>
        <Button className="btn2 button-medium" variant="outline-secondary" onClick={() => handleNavigation('/register')}>Register</Button>
      </Nav>
    </Navbar>
  );

}

export default Navigation;
