
import { useState } from 'react'
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

function App() {

   const [showProfile , setShowProfile] = useState(false)


  return (
    <>
      <h1>hello react </h1>
      <Header />
      <Profile age="24" name="arun" PLACE="Tambaram" />
      <Profile age="34" name="barun" PLACE="malai" />


      <div>
        <Card>
          <h2>Profile card </h2>
          <p>name : Arun</p>
        </Card>
        <Card>
          <h2>Message </h2>
          <p>Welcome to react people </p>
        </Card>


        <Counter />
        <Toggle />



        <LoginStatus />
        <UserRole />
        <ToggleMessage />
        <ProductList />
        <StatusMessage status={"success"} />


        <button onClick={() => setShowProfile(!showProfile)}>
          Toggle Profile
        </button>


        {showProfile && <Profile age="24" name="arun" PLACE="Tambaram" />}
      </div>


    </>



  )


}

export default App



