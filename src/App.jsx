import { useState } from 'react'
import './App.css'

function App() {
  const [carro, setCarro] = useState('Tesla Model 3')
function trocarDeCarro(){
  setCarro('Porsche Taycan')
  alert(carro)
}
  return (
    <>
       <h1>{carro}</h1>
    <button onClick={trocarDeCarro}>Trocar de Carro</button>

    </>
  )
}

export default App
