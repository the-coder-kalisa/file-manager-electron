import React, { useState, useContext, useEffect } from "react";
import { ContextProvider } from "../context/Click";
import Files from "./Files";
import MyFolder from "./MyFolder";

const path = window.require("path");
const fs = window.require("fs");

const FileMe = ({ file }) => {
  const [isFile, setIsfile] = useState(false);
  const { currentDir } = useContext(ContextProvider);
  useEffect(() => {
    fs.stat(path.join(currentDir, file), (error, arg) => {
      if (error) console.log(error);
      setIsfile(arg.isFile());
    });
  }, [currentDir, file]);
  return isFile ? (
    <Files
      main={true}
      width={100}
      index={path.join(currentDir, file)}
      name={file}
      directory={path.join(currentDir, file)}
    />
  ) : (
    <MyFolder
      main={true}
      width={100}
      index={path.join(currentDir, file)}
      name={file}
      directory={path.join(currentDir, file)}
    />
  );
};

export default FileMe;
