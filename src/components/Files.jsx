import React, { useContext } from "react";
import { ContextProvider } from "../context/Click";
import { FileOpen } from "@mui/icons-material";
const path = window.require("path");

const {shell} = window.require("electron");

function Files(props) {
  const { currentDir } = useContext(ContextProvider);
  return (
    <div
      onClick={() => {
       shell.openPath(`${path.join(currentDir, props.file)}`)
      }}
      className="flex flex-col w-fit gap-2 cursor-pointer items-center"
    >
      <FileOpen style={{ ...props, height: props.width, color: "gray" }} />
      <span className="font-bold max-w-[7rem] break-words text text-center">{props.name}</span>
    </div>
  );
}

export default Files;
