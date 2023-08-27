import React from "react";

const Button = ({ children }) => {
  return <button type="button" className="bg-rakamin hover:bg-blue text-white font-bold py-2 px-4 rounded">{children}</button>
}

export default Button;