import React, { createContext, useState } from "react";

export const Hooks = createContext();
function Index(props) {
  const [__popUp, set__popUp] = useState(false);
  const [__popUpData, set__popUpData] = useState([]);
  const valx = {
    __popUp,
    set__popUp,
    __popUpData,
    set__popUpData,
  };
  return <Hooks.Provider value={valx}>{props.children}</Hooks.Provider>;
}

export default Index;
