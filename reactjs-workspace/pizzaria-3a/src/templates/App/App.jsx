import { useState } from 'react'
import {Link} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='container'>
      <button className='btn btn-primary me-2'>
        Voltar
      </button>
      <Link to={"/home"} className='btn btn-danger'>
        Home
      </Link>
      </div>

  )
}

export default App
