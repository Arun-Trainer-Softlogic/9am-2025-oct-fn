
import './App.css'
import Card from './components/Card'
import Counter from './components/Counter'
import Header from './components/Header'
import Profile from './components/Profile'
import Toggle from './components/Toggle'

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


        <Counter/>
        <Toggle/>
            </div>


    </>



  )


}

export default App



