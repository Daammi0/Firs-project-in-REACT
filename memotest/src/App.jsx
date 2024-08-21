import { Grid } from "./grid/grid"
import "./App.css"

import { createContext, useEffect, useState } from "react"

export const Contexto1 = createContext(null);
function App() {

  const [ultimoMostrado, setUltimoMostrado] = useState(null)

  return (
    <>
      <Contexto1.Provider value={[ultimoMostrado, setUltimoMostrado]}>
        <div className="centrar">
          <Grid/>
        </div>
      </Contexto1.Provider>
    </>
  )
}

export default App
