import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'

function App() {

  const[mensaje, setMensaje] = useState({
    msg:'',
    color: '',
  })
  const mostrarValidacion = (mensajeValidacion) => {
    setMensaje(mensajeValidacion)
  }
  return (
    <>
      <Registro 
      validacion= {mostrarValidacion}
      mensaje={mensaje}
      ></Registro>
    </>
  )
}
export default App
