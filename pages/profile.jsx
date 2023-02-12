import Head from 'next/head';
import React from 'react';
import MyNavbar from '../components/MyNavbar';

function Profile() {
  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <main>
        <MyNavbar />
        <h1>Hello User</h1>
      </main>
    </>
  );
}

export default Profile;
