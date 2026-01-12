
import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import Card from './components/Card'
import Counter from './components/Counter'
import Header from './components/Header'
import LoginStatus from './components/LoginStatus'
import ProductList from './components/ProductList'
import Profile from './components/Profile'
import StatusMessage from './components/StatusMessage'
import Toggle from './components/Toggle'
import ToggleMessage from './components/ToggleMessage'
import UserRole from './components/UserRole'
import ControlledInputs from './components/ControlledInputs'
import UncontrolledInputs from './components/UncontrolledInputs'
import BasicFormValidation from './components/BasicFormValidation'
import Followers from './components/Followers'
import TimerExample from './components/TimerExample'
import DateCountdown from './components/Datecountdown'

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from './pages/Contact'
import Settings from './pages/Settings'
function App() {

  //  const [showProfile , setShowProfile] = useState(false)


  return (
    // <>
    //   <h1>hello react </h1>
    //   <Header />
    //   <Profile age="24" name="arun" PLACE="Tambaram" />
    //   <Profile age="34" name="barun" PLACE="malai" />


    //   <div>
    //     <Card>
    //       <h2>Profile card </h2>
    //       <p>name : Arun</p>
    //     </Card>
    //     <Card>
    //       <h2>Message </h2>
    //       <p>Welcome to react people </p>
    //     </Card>


    //     <Counter />
    //     <Toggle />



    //     <LoginStatus />
    //     <UserRole />
    //     <ToggleMessage />
    //     <ProductList />
    //     <StatusMessage status={"success"} />


    //     <button onClick={() => setShowProfile(!showProfile)}>
    //       Toggle Profile
    //     </button>


    //     {showProfile && <Profile age="24" name="arun" PLACE="Tambaram" />}
    //   </div>


    //   <ControlledInputs/>

    //   <UncontrolledInputs/>
    //   <BasicFormValidation/>
    //   <Followers/>
    //   <TimerExample/>
    //   <DateCountdown/>


    // </>

   <>
      <nav className="navbar">
        <div className="nav-logo">MyApp</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
           <Link to="/settings">Settings</Link> 
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </>



  )


}

export default App



