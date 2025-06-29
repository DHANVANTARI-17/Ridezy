import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignUp = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName,  setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    //const [userData, setUserData] = useState('');

    const navigate = useNavigate();

     const { user, setUser } = useContext(UserDataContext)


    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            password: password,
            
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
        if(response.status == 201)
        {
          const data = response.data;
          console.log('User Data:', data);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          navigate('/home');
        }
        else
        {
          console.error('Error creating user:', response.data);
          alert('Error creating user. Please try again.');
        }


        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
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
          <h3 className="text-base mb-2 font-medium">What is your name?</h3>
          <div className="flex gap-4 mb-2">
            <input
                className="bg-[#eeeeee] px-4 py-2 text-sm border w-full rounded mb-4 placeholder:text-base"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                required
            />
            <input
                className="bg-[#eeeeee] px-4 py-2 text-sm border w-full rounded mb-4 placeholder:text-base"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                required
            />
          </div>

          <h3 className="text-base mb-2 font-medium">What is your email?</h3>
          <input
            className="bg-[#eeeeee] px-4 py-2 text-sm border w-full rounded mb-4 placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            required
          />

          <h3 className="text-base mb-2 font-medium">Enter Password</h3>
          <input
            className="bg-[#eeeeee] px-4 py-2 text-sm border w-full rounded mb-4 placeholder:text-base"
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
            Create Account
          </button>

          <p className="text-center text-sm">
            Already have an account?{' '}
            <Link to="/userlogin" className="text-blue-600 font-medium">
              Login
            </Link>
          </p>
        </form>

        <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignUp