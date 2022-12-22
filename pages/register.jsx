import Head from 'next/head';
import React from 'react';
import MyNavbar from '../components/MyNavbar';
import RegisterForm from '../components/RegisterForm';

function Register() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <main>
        <MyNavbar />
        <RegisterForm />
      </main>
    </>
  );
}

export default Register;
