import { Card } from "../card/Card"
import "./grid.css"
import data from "../db.json"
import "../funciones/shuffle"
import { shuffle } from "../funciones/shuffle.js"

export function Grid() {

    const crearMazoMezclado = () => {        
        // duplico las 8 imagenes que tengo
        let a = shuffle(data.concat(data))
        return a
    }

    const mazo = crearMazoMezclado()

    // console.log(crearMazoMezclado())
    return(
        <div className="grid-memotest">
            { 
                mazo.map((directorio, i) => {
                    
                    return <Card key={i} src={directorio} />
                })
            }
        </div>
    )
}