import Link from 'next/link';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import styles from './Login.module.css';
import SignupMenu from './SignupMenu';

function LoginForm() {
  return (
    <Container className={styles.container}>
      <Form>
        <Form.Group className="mb-3">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center align-items-center">
            {/* Checkbox */}
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </div>

          <div className="col">
            {/* Simple link */}
            <Link href="#!">Forgot password?</Link>
          </div>
        </div>

        {/* Submit button */}
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" size="lg">
            Sign In
          </Button>
        </div>

        {/* Register buttons */}
        <div className="text-center">
          <p>
            Not a member? <Link href="/register">Register</Link>
          </p>
          <SignupMenu />
        </div>
      </Form>
    </Container>
  );
}

export default LoginForm;
