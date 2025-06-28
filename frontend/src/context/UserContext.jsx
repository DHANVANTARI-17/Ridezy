import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';


const UserDataContext = createContext();
export const UserContext = ( {children} ) => {
    const [user, setUser] = useState(
        {
            email: '',
            fullname: {
                firstname: '',
                lastname: ''
            }
        }
    );

  return(
    <div>
        <UserDataContext.Provider value = {{user, setUser}}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
};




export default UserContext