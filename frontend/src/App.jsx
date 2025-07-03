import React from 'react' 
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Start from './pages/Start'
import Userlogin from './pages/Userlogin'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import UserSignUp from './pages/UserSignUp'
import UserLogout from './pages/UserLogout'
import UserProtectWrapper from './pages/UserProtectWrapper'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper' 
import CaptainLogout from './pages/CaptainLogout'
import CaptainHome from './pages/CaptainHome'  
import Riding from './pages/Riding'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />  
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/captainlogin" element={<CaptainLogin />} />
        <Route path="/captainsignup" element={<CaptainSignUp />} />
        <Route path="/usersignup" element={<UserSignUp />} />
        <Route path="/riding" element={<Riding />} />   

        {/* Protected Route for Home */}
        <Route path='/home'
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } />

          <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />

        {/* Protected Route for Captain Home */}
        <Route path='/captain-home'
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          } />  
        <Route path='/captain/logout'
          element={<CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
          } />
      </Routes>
    </div>
  )
}

export default App