import React, { useState, useContext, createContext } from "react";
import "./style.css";
import Box from "./Box";
import BoxBiru from "./BoxBiru";
import RakaminContext from "./RakaminContext";

const App = () => {
  let [name, setName] = useState("Rakamin Test");

  return (
    <RakaminContext.Provider value={name}>
      <div>

        <Box />
        <BoxBiru />

      </div>
    </RakaminContext.Provider>
  )
}

export default App;