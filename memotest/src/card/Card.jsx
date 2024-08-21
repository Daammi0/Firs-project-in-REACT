import "./card.css"
import {useState, useContext } from "react"
import { Contexto1 } from "../App"

export function Card({ src }){

    const [ultimoMostrado, setUltimoMostrado] = useContext(Contexto1)
    

    const[mostrar, setMostrar] = useState(false)
    
    const handleClick = () => {

        setMostrar(!mostrar)

        if(src == ultimoMostrado){
            alert("ganaste")
        
        } else if(ultimoMostrado == null) {
            setUltimoMostrado(src)
        } else {
            alert("perdiste")
            setUltimoMostrado(null)
        }
        
        
    }

    return(

        <div className="card-memotest" data-show={mostrar} onClick={handleClick}>
            <img  src={src} alt="imagen no encontrada" />
        </div>

    )


}