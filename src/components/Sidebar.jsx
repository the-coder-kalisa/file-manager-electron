import React, { useState, useEffect } from "react";
import MyFolder from "../components/MyFolder.jsx";
const fs = window.require("fs");

function Sidebar() {
  const [files, setFiles] = useState([]);
  const [currentDir, setCurrentDir] = useState("/");
  useEffect(() => {
    fs.readdir(currentDir, (err, files) => {
      if (err) console.log(err);
      setFiles(files);
    });
  }, []);
const [clicked, setClicked] = useState(false)
  return (
    <div className="flex h-fit gap-10 py-2 px-2 w-[5rem]">
      <div>
        <MyFolder clicked={clicked} onClick={() =>[setClicked(!clicked)]} name="computer" directory="/" width="2rem" />
        {files.map((file, index) => (
          <div key={index}>{file}</div>
        ))}
      </div>
      <div className="cursor-ew-resize border-[gray] border-r-[1px] border-solid"></div>
    </div>
  );
}

export default Sidebar;
