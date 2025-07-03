import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props);
  const locations = [
    "248, Pawar Nagar, Nashik, Maharashtra 422003",
    "123, Main Street, Los Angeles, CA 90001",
    "456, Elm Street, San Francisco, CA 94101",
    "789, Oak Avenue, New York, NY 10001"
  ]
  return (
    <div>
      {
        locations.map(function(elem, idx){
           return (
           <div key={idx} onClick={()=>
           {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
           }
           } className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'> <i className="ri-map-pin-line"></i></h2>
            <h4 className='text-sm font-medium'>{elem}</h4>
        </div>
        )
        })
}
    </div>
  )
}

export default LocationSearchPanel