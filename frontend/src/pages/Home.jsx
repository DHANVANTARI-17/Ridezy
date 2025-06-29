import React from 'react';
import { Link } from 'react-router-dom';
import UserLogout from './UserLogout';
import CaptainLogout from './CaptainLogout';
const Home = () => {
  return (
    <div className="h-screen flex justify-between flex-col w-full bg-red-400 bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
      {/* <UserLogout /> */}
      <CaptainLogout />
    </div>
  )
}

export default Home