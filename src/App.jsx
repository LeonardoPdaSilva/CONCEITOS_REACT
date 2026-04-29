import { useState } from 'react'
import './App.css'
import Login from './paginas/login'
import Cadastro from './paginas/cadastro'
import Usuarios from './paginas/usuarios'

function App() {
  const [tela, setTela] = useState('Login')

  const trocarDeTela = (pagina)=> {
    setTela(pagina)
  }

  const renderizar = () => {
    if(tela === 'Login'){
      return <Login/>
    } else if(tela === 'cadastro'){
      return <Cadastro/>
    } else if(tela === 'usuarios'){
      return <Usuarios/>
    }
    else{
      return <Login/>
    }
  }

  return (
    <>
    
    <button onClick={() => trocarDeTela('cadastro')}>Cadastro</button>
    <button onClick={() => trocarDeTela('login')}>Login</button>
    <button onClick={() => trocarDeTela('usuarios')}>Usuários</button>

    <hr/>
    {renderizar()}
    </>
  )
}

export default App

