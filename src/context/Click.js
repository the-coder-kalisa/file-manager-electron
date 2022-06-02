import React, { createContext, useState } from "react";
export const ContextProvider = createContext();
function ClickThe({ children }) {
  const [clicks, setClicks] = useState([]);
  const [currentDir, setCurrentDir] = useState('/');
  const clickHere = (index) => {
    let clicked = clicks.filter((clicks) => clicks !== index);
    clicks.includes(index) ? setClicks(clicked) : setClicks([...clicks, index]);
  };
  return <ContextProvider.Provider value={{clicks, clickHere, currentDir, setCurrentDir}}>{children}</ContextProvider.Provider>;
}

export default ClickThe;
