import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {UserDataContext} from '../context/UserContext';
import { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Userlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); 
    const { user, setUser } = useContext(UserDataContext);
    const submitHandler = (e) => {
        e.preventDefault();
       const user ={
            email: email,
            password: password
        }

        const response = axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, user);
        response.then((res) => {
          if (res.status === 200) {
            const data = res.data;
            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home');
          }
        });
        setEmail('');
        setPassword('');
    };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Logo */}
      <div className="p-3">
        <img
          className="w-32 h-auto"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-Transparent-Background.png"
          alt="Uber Logo"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-1 flex-col justify-center items-center px-4">
        <form 
            className="w-full max-w-md bg-white p-6 rounded shadow"
            onSubmit={(e)=>{
                submitHandler(e);
            }}
          >
          <h3 className="text-xl mb-4 font-semibold">What is your email?</h3>
          <input
            className="bg-[#eeeeee] px-4 py-2 text-base border w-full rounded mb-4 placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            required
          />

          <h3 className="text-xl mb-2 font-semibold">Enter Password</h3>
          <input
            className="bg-[#eeeeee] px-4 py-2 text-base border w-full rounded mb-4 placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <button
            className="bg-black text-white font-semibold py-2 px-4 rounded w-full mb-4"
            type="submit"
          >
            Login
          </button>

          <p className="text-center text-sm">
            New here?{' '}
            <Link to="/usersignup" className="text-blue-600 font-medium">
              Create New Account
            </Link>
          </p>
        </form>

        {/* Captain Signup */}
        <Link to="/captainlogin" className="bg-green-600 flex items-center justify-center text-white font-semibold py-2 px-4 rounded w-full max-w-md mt-3">
          Sign up as captain
        </Link>
      </div>
    </div>
  );
};

export default Userlogin;
