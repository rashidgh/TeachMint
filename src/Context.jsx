import React from "react";
import { useState } from "react";
import { createContext } from "react";
export let Sender = createContext();
let Context = ({ children }) => {
  let [state, setState] = useState([]);
  let [details, setDetails] = useState([]);
  let [togglee, setToggle] = useState(true);
  return (
    <Sender.Provider value={{ state, setState, details, setDetails }}>
      {children}
    </Sender.Provider>
  );
};
export default Context;
