import Head from 'next/head';
import React from 'react';
import LoginForm from '../components/LoginForm';
import MyNavbar from '../components/MyNavbar';

function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <MyNavbar />
        <LoginForm />
      </main>
    </>
  );
}

export default Login;
