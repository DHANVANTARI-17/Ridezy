import React from 'react'

const ConfirmRidePanel = (props) => {
  return (
    <div className="">
        <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => {
            props.setConfirmRidePanel(false);
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-xl font-semibold mb-5'>Confirm Ride</h3>
        <div className="flex justify-between items-center flex-col gap-3">
            <img className="h-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className="w-full mb-2">
                <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className="text-lg ri-map-pin-2-fill px-1"></i>
                    <div>
                        <h4 className="text-sm font-semibold">562/11-A</h4>
                        <p className="text-xs mt-1 text-gray-600">Shetkari Chowk, Vaduj</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className="ri-map-pin-range-line px-1"></i>
                    <div>
                        <h4 className="text-sm font-semibold">400/10-C</h4>
                        <p className="text-xs mt-1 text-gray-600">Powai Naka, Satara</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 '>
                    <i className="ri-money-rupee-circle-fill px-1"></i>
                    <div>
                        <h4 className="text-sm font-semibold">$411</h4>
                        <p className="text-xs mt-1 text-gray-600">Cash Cash</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <button
            onClick={() => {
                props.setVehicleFound(true)
                props.setConfirmRidePanel(false)

                props.setConfirmRidePanel(false)
            }} 
            className="w-full bg-green-500 text-white font-semibold rounded-lg py-1 px-3 ">Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmRidePanel 