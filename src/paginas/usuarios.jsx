import { useEffect, useState } from "react"

export default function Usuarios(){
    const [cont, setCont] = useState(0)    

    const aumenta = () => {
        setCont(cont + 1)
    }
    const diminui = () => {
        setCont(cont - 1)
    }


    useEffect(()=> {
        document.title = `count: ${cont}`
    }, [cont])

    if(cont == 11){ 
        alert("Passou de dez!")
    }
    if(cont == -10){
        alert("Chegou a menos dez")
    }


    return(
        <div>
            <h1>USUÁRIOS</h1>
            {cont} <br />
            <button button onClick={() => aumenta()}>Aumentar</button>
             <br />
            <button button onClick={() => diminui()}>Diminuir</button>
        </div>
        )
     
    }