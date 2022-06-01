import React from "react";
import Navigation from "../components/Navigation.jsx";
import Sidebar from "../components/Sidebar.jsx";

function Directory() {
  return (
    <div>
      <Navigation />
      <div className="pt-[4rem]">
        <Sidebar />
      </div>
    </div>
  );
}

export default Directory;
