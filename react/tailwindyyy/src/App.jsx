import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './features/counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-extrabold underline">
        Hello world!
      </h1>
      <Counter/>
    </>
  )
}

export default App
