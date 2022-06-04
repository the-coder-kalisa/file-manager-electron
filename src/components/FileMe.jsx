import React, { useState, useContext, useEffect } from "react";
import { ContextProvider } from "../context/Click";
import Files from "./Files";
import MyFolder from "./MyFolder";

const path = window.require("path");
const fs = window.require("fs");

const FileMe = ({ file, onClick,show, select }) => {
  const [isFile, setIsfile] = useState(false);
  const { currentDir } = useContext(ContextProvider);
  useEffect(() => {
    fs.stat(path.join(currentDir, file), (_error, arg) => {
      setIsfile(arg?.isFile());
    });
  }, [currentDir, file]);
  return isFile ? (
    <Files
      main={true.toString()}
      width={100}
      onClicks={onClick}
      file={file}
      select={select}
      index={path.join(currentDir, file)}
      name={file}
      show={show}
    />
  ) : (
    <MyFolder
      show={show}
      onClicks={onClick}
      main={true.toString()}
      width={100}
      select={select}
      index={path.join(currentDir, file)}
      name={file}
    />
  );
};

export default FileMe;
