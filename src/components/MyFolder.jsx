import { ChevronRight, Folder } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../context/Click";
const fs = window.require("fs");
function MyFolder(props) {
  const [subFolder, setSubFolder] = useState(false);
  const { setCurrentDir, history, selected, setHistory, currentDir } =
    useContext(ContextProvider);
  useEffect(() => {
    fs.readdir(props.index, (_e, files) => {
      files?.length > 0 &&
        files
          .map((file) => fs.lstatSync(`${props.index}/${file}`).isFile())
          .includes(false) &&
        setSubFolder(true);
    });
  }, [props]);
  return (
    <div
      className={`flex ${
        props.select !== undefined &&
        props.select === props.index &&
        "bg-[#535252] text-white"
      } cursor-pointer hover:bg-[#535252] hover:text-white ${
        props.main && "justify-center"
      } ${(!subFolder || props.main) && "gap-2"} items-center ${
        !props.main && "pl-2"
      }`}
    >
      {subFolder && !props.main && (
        <ChevronRight
          onClick={props.onClick}
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
        onDoubleClick={() => {
          setCurrentDir(props.index);
          let myHist = history.filter(
            (_value, index) => index <= history.indexOf(currentDir)
          );
          !history.includes(currentDir)
            ? setHistory([...history, props.index])
            : setHistory([...myHist, props.index]);
        }}
        onClick={props.onClicks}
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
        {props.show === selected ? (
          <input
            defaultValue={props.name}
            className={`text-lg max-w-[8rem] text-black ${
              props.main ? "break-words textcenter" : "truncate"
            } ${props.main && "font-bold"}`}
            type="text"
          />
        ) : (
          <span
            className={`text-lg max-w-[8rem] ${
              props.main ? "break-words text-center" : "truncate"
            } ${props.main && "font-bold"}`}
          >
            {props.name}
          </span>
        )}
      </div>
    </div>
  );
}

export default MyFolder;
