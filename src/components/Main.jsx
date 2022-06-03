import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../context/Click";
import FileMe from "./FileMe";

const fs = window.require("fs");

function Main() {
  const { currentDir, setCurrentDir, search } = useContext(ContextProvider);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    fs.readdir(currentDir, (_err, files) => {
      setFiles(files);
      search.length &&
        setFiles(files.filter((value) => value.startsWith(search)));
    });
  }, [currentDir, search]);
  const changeLoc = (index) => {
    setCurrentDir(
      "/" +
        currentDir
          .split("/")
          .slice(1)
          .slice(0, index + 1)
          .join("/")
    );
  };

  return (
    <div className="w-full">
      <div className="border-b-2 flex -ml-1 border-solid">
        {currentDir
          .split("/")
          .slice(1)
          .map((one, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => changeLoc(index)}
            >
              {one}
              {index !== currentDir.split("/").slice(1).length - 1 && (
                <span>&gt;</span>
              )}
            </div>
          ))}
      </div>
      <div
        style={{ gridTemplateColumns: "repeat(auto-fill,minmax(150px, 1fr))" }}
        className="px-3 grid w-full"
      >
        {files?.map((file, index) => (
          <div key={index}>
            <FileMe file={file} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
