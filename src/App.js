import React, { useState, useContext, createContext } from "react";
import "./style.css";
import Button from "./Button";
import { ChakraProvider } from '@chakra-ui/react';
import Home from "./Home";
// import Box from "./Box";
// import BoxBiru from "./BoxBiru";
// import RakaminContext from "./RakaminContext";

const App = () => {
  let [name, setName] = useState("Rakamin Test");

  return (
    <ChakraProvider>

      <Home />

    </ChakraProvider>
  );


  // return (
  //   <RakaminContext.Provider value={name}>
  //     <div>

  //       <Box />
  //       <BoxBiru />

  //       <div className="box box-biru">
  //         <div className="box-image"></div>
  //         <div className="box-name">TESTS</div>
  //       </div>

  //     </div>
  //   </RakaminContext.Provider>
  // )
}

export default App;