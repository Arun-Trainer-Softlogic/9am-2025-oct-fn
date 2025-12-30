
import './App.css'
import Card from './Card'
import Header from './Header'
import Profile from './Profile'

function App() {


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
      </div>


    </>



  )


}

export default App



