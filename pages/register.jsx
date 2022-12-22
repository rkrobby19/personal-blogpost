import Head from 'next/head';
import React from 'react';
import RegisterForm from '../components/register';

function Register() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <main>
        <RegisterForm />
      </main>
    </>
  );
}

export default Register;
