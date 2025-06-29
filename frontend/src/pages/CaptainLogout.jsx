import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogout = () => {
  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

    const token = localStorage.getItem('token');
    axios.get(`${import.meta.env.VITE_API_URL}/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
      if (res.status === 200) {
        setCaptain(null);
        localStorage.removeItem('token');
        navigate('/captainlogin');
      }
    })
    .catch((error) => {
      console.error('Error logging out:', error);
    });

  return (
    <div>
      <h2>Captain Logout</h2>
    </div>
  )
}

export default CaptainLogout