import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { firebaseLogin } from '../utils/user';
import styles from './Login.module.css';
import SignupMenu from './SignupMenu';

function LoginForm() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const name = e.target.id;
    const { value } = e.target;

    setInputs((prev) => {
      // eslint-disable-next-line no-param-reassign
      prev[name] = value;

      return prev;
    });
  };

  const handleLogin = async () => {
    const resp = await firebaseLogin(inputs.email, inputs.password);
    if (resp.status === 'SUCCESS') {
      alert('Welcome');
      console.log(resp.data);
    } else {
      alert(resp.message);
    }
  };
  return (
    <Container className={styles.container}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleOnChange}
          />
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
          <Button variant="primary" size="lg" onClick={handleLogin}>
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
