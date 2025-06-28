import React from 'react' 
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import UserSignUp from './pages/UserSignUp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/captainlogin" element={<CaptainLogin />} />
        <Route path="/captainsignup" element={<CaptainSignUp />} />
        <Route path="/usersignup" element={<UserSignUp />} />
      </Routes>
    </div>
  )
}

export default App