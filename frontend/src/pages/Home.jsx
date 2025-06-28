import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
        <div className='h-screen flex justify-between flex-col w-full bg-red-400 bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
        <img className="w-15 ml-2 mt-2 " src="https://www.pngplay.com/wp-content/uploads/8/Uber-Transparent-Background.png" />
            <div className="bg-white pb-2 py-1 px-4">
                <h2 className='text-2xl font-bold text-center'>Get Started with Uber</h2>
                <Link to='/userlogin' className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-lg mt-5">Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home