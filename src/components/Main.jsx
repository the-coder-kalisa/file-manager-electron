import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../context/Click";
import FileMe from "./FileMe";

const fs = window.require("fs");

function Main() {
  const { currentDir } = useContext(ContextProvider);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    fs.readdir(currentDir, (err, files) => {
      setFiles(files);
    });
  }, [currentDir]);
  

  return (
    <div>
      <div className="border-b-2 w-[150%] -ml-1 border-solid">
        {currentDir.split('/').join('>')}
      </div>
      <div
        style={{ gridTemplateColumns: " repeat(13, minmax(0, 1fr))" }}
        className="px-3 gap-5 grid "
      >
        {files?.map((file, index) => (
          <div key={index}> 
          <FileMe file={file}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
