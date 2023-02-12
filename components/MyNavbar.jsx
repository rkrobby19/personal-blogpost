import Link from 'next/link';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './MyNavbar.module.css';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Blogpost</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={styles.text} href="/">
              Home
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link className={styles.text} href="/login">
              Sign In
            </Link>
            <Link className={styles.text} href="/register">
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
