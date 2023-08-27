import React, { useContext } from "react";
import BoxName from "./BoxName"
import RakaminContext from "./RakaminContext";

const BoxBiru = () => {
  const name = useContext(RakaminContext);

  return (
    <div className="box box-biru">
      <div className="box-image"></div>
      <BoxName name={name} />
    </div>
  )
}

export default BoxBiru;