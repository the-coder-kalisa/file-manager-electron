import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation.jsx";
import Sidebar from "../components/Sidebar.jsx";

const fs = window.require("fs");
const path = window.require("path");
const dir = path.join(__dirname, "/");

function Directory() {
  const [files, setFiles] = useState([]);
  const [currentDirectory, setCurrentDirectory] = useState(dir);
  useEffect(() => {
    fs.readdir(currentDirectory, (err, files) => {
      if (err) console.log(err);
      setFiles(files);
    });
  }, []);
  return (
    <div>
      <Navigation />
      <div className="pt-[4rem]">
        <Sidebar currentDirectory={currentDirectory} />
      </div>
    </div>
  );
}

export default Directory;
