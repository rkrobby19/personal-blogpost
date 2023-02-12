import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { firebaseRegister } from '../utils/user';
import styles from './Login.module.css';
import SignupMenu from './SignupMenu';

function RegisterForm() {
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

  const handleRegister = async () => {
    const resp = await firebaseRegister(inputs.email, inputs.password);
    if (resp.status === 'SUCCESS') {
      alert('Register Success');
    } else {
      alert(resp.message);
    }
  };

  return (
    <Container className={styles.container}>
      <Form>
        <h2 className={styles.tittle}>Sign Up</h2>
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
              <Form.Check
                type="checkbox"
                label="I have read and agree to the terms"
              />
            </Form.Group>
          </div>
        </div>

        {/* Submit button */}
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={handleRegister}>
            Sign In
          </Button>
        </div>

        <div className="text-center">
          <p>
            Already have an account? <Link href="/login">Sign in</Link>
          </p>
          <SignupMenu />
        </div>
      </Form>
    </Container>
  );
}

export default RegisterForm;
