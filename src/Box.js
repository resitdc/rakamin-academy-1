import React, { useContext } from "react";
import BoxName from "./BoxName"
import RakaminContext from "./RakaminContext";

const Box = () => {
  const name = useContext(RakaminContext);

  return (
    <div className="box">
      <div className="box-image"></div>
      <BoxName name={name} />
    </div>
  )
}

export default Box;