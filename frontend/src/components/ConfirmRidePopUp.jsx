// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const submitHander = async (e) => {
        e.preventDefault()

        // const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
        //     params: {
        //         rideId: props.ride._id,
        //         otp: otp
        //     },
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem('token')}`
        //     }
        // })

        // if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            // navigate('/captain-riding', { state: { ride: props.ride } })
        // }


    }
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="text-2xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-xl font-semibold mb-5'>Confirm this ride to Start</h3>
            <div className='flex items-center justify-between p-2 border-2 border-gray-300 rounded-lg mt-4'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-12' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    <h2 className='text-base font-medium capitalize'>Rohini</h2>
                </div>
                <h5 className='text-base font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Pratibha Hospital, Satara</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-base ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-base font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kodoli, Satara</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-base font-medium'>₹200 </h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                        </div>
                    </div>
                </div>

                <div className='mt-6 w-full'>
                    <form >
                        {/* <input value={1} onChange={(e) => setOtp(e.target.value)} type="text" className='bg-[#eee] px-6  font-mono text-lg rounded-lg w-full mb-5 py-2' placeholder='Enter OTP' /> */}

                        <button className='w-full text-base  bg-green-800 text-white font-semibold p-1 rounded-lg'>Confirm</button>
                        <button onClick={() => {
                            props.setConfirmRidePopupPanel(false)
                            props.setRidePopupPanel(false)

                        }} className='w-full mt-2 bg-red-400 text-base text-white font-semibold p-1 rounded-lg'>Cancel</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp