import React from "react";
import Main from "../components/Main.jsx";
import Navigation from "../components/Navigation.jsx";
import Sidebar from "../components/Sidebar.jsx";

function Directory() {
  return (
    <div onDragEnter={() => {}}>
      <Navigation />
      <div className="pt-[4rem] flex items-start">
          <Sidebar />
          <Main />
      </div>
    </div>
  );
}

export default Directory;
