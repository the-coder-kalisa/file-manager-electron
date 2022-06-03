import { ChevronRight, Folder } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../context/Click";
const fs = window.require("fs");
function MyFolder(props) {
  const [subFolder, setSubFolder] = useState(false);
  const { setCurrentDir } = useContext(ContextProvider);
  useEffect(() => {
    fs.readdir(props.index, (_e, files) => {
      files?.length > 0 &&
        files
          .map((file) => fs.lstatSync(`${props.directory}/${file}`).isFile())
          .includes(false) &&
        setSubFolder(true);
    });
  }, [props]);
  return (
    <div
      className={`flex cursor-pointer ${
        (!subFolder || props.main) && "gap-2"
      } items-center ${!props.main && "pl-2"}`}
    >
      {subFolder && !props.main && (
        <ChevronRight
          {...props}
          style={
            props?.clicks?.includes(props.index) 
              ? {
                  transform: "rotate(90deg)",
                  transitionDuration: 10,
                  transitionProperty: "all",
                }
              : {
                  transform: "rotate(0)",
                  transitionDuration: 100,
                  transitionProperty: "all",
                }
          }
        />
      )}
      <div
        onClick={() => setCurrentDir(props.index)}
        className={`flex gap-1 items-center ${props.main && "flex-col"}`}
      >
        <Folder
          style={
            !subFolder
              ? {
                  ...props,
                  height: props.width,
                  color: "gray",
                  marginLeft: `${!props.main ? "1.5rem" : 0}`,
                }
              : { ...props, height: props.width, color: "gray" }
          }
        />
        <span
          className={`text-lg max-w-[8rem] ${props.main ? 'break-words text-center' : 'truncate'} ${
            props.main && "font-bold"
          }`}
        >
          {props.name}
        </span>
      </div>
    </div>
  );
}

export default MyFolder;
