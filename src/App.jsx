import { useState } from 'react'
import logo from './assets/react.svg'
import student from './assets/student.png'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/homepage'

function App() {
  const [count, setCount] = useState(0)
  const number = 4
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={student} className="logo react" alt="React logo" />
        </a>
        
      </div>
      <h1>hello world {number + 2}</h1>
      <HomePage />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <HomePage />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
