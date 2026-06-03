import { use, useState } from "react"

export default function Cadastro({navegar}){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const cadastrar = async () =>{
        const resultado = await fetch('http://localhost:3000/usuarios',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({nome, email, senha})
        } 
    )
    const data = await resultado.json()
    console.log(data);
    console.log(resultado.ok);
    if(!resultado.ok){
        alert(data.error)
    } else{
        alert('Cadastro realizado com sucesso')
        navegar('login')
    }
    
    

    }

        return(
            <div>
                <input type="text"id="nome" value={nome}
                placeholder="Digite seu Nome"
                onChange={(e) => setNome(e.target.value)} />

                <input type="email" id="email" value={email}
                placeholder="digite seu Email"
                onChange={(e) => setEmail(e.target.value)}
                />
                
                <input type="password" id="senha" value={senha}
                placeholder="digite sua Senha"
                onChange={(e) => setSenha(e.target.value)}
                />
                <h3>{nome}</h3>
                <h3>{email}</h3>
                <h3>{senha}</h3>
                <button onClick={() => cadastrar()}>cadastrar</button>
            </div>
         
        )
    }