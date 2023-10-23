import { useState } from 'react'
import './App.css'

//Importar imagens
import logo from "/images/logo.svg";

// COMPONENTES DA PÁGINA
//Componentes da direita
import Display from './components/Display';
//Componentes da esquerda
import Form from './components/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "app">
      <img src={logo} alt="Splitte" />
      <div className='container'>
        <Form />
        <Display />
      </div>
    </div>
  )
}

export default App
