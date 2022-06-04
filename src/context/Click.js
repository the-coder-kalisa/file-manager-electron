import React, { createContext, useState } from "react";
export const ContextProvider = createContext();
function ClickThe({ children }) {
  const [clicks, setClicks] = useState(["/"]);
  const [currentDir, setCurrentDir] = useState("/");
  const [selected, setSelected] = useState();
  const [history, setHistory] = useState([currentDir]);
  const [search, setSearch] = useState("");
  const clickHere = (index) => {
    let clicked = clicks.filter((clicks) => clicks !== index);
    clicks.includes(index) ? setClicks(clicked) : setClicks([...clicks, index]);
  };
  return (
    <ContextProvider.Provider
      value={{
        clicks,
        search,
        history,
        setHistory,
        setSearch,
        selected,
        setSelected,
        clickHere,
        currentDir,
        setCurrentDir,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export default ClickThe;
