import { Card } from "../card/Card"
import "./grid.css"
import data from "../db.json"


export function Grid() {
    const crearMazoMezclado = () => {
        return data.concat(data)
    }


    // console.log(crearMazoMezclado())
    return(
        <div className="grid-memotest">
            
        </div>
    )
}