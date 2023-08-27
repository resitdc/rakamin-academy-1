import React, { useContext } from "react";
import BoxName from "./BoxName"
import RakaminContext from "./RakaminContext";

const BoxBiru = () => {
  const name = useContext(RakaminContext);

  return (
    <div class="box box-biru">
      <div class="box-image"></div>
      <BoxName name={name} />
    </div>
  )
}

export default BoxBiru;