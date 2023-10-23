import { useState } from 'react'
import './App.css'

//Componentes da direita
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "App.Right">
      <div className='container'>       
        <Display />          
      </div>
    </div>
  )
}

export default App
