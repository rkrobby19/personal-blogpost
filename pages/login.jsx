import Head from 'next/head';
import React from 'react';
import LoginForm from '../components/login';

function Login() {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <main>
        <LoginForm />
      </main>
    </>
  );
}

export default Login;
