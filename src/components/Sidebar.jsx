import React, { useState, useEffect, useRef, useContext } from "react";
import MyFolder from "../components/MyFolder.jsx";
import Clickes from "./Clickes.jsx";
import { ContextProvider } from "../context/Click";
const fs = window.require("fs");
const path = window.require("path");
function Sidebar() {
  const {
    clicks,
    clickHere,
    setCurrentDir,
    selected
  } = useContext(ContextProvider);

  const [files, setFiles] = useState([]);
  const ken = useRef();
  useEffect(() => {
    ken.current.draggable = true;
    fs.readdir("/", (err, files) => {
      if (err) return console.log(err);
      setFiles(files);
    });
  }, []);
  const [width, setWidth] = useState("fit-content");
  return (
    <div
      style={{ width: width }}
      className="flex h-fit gap-10 justify-between px-2"
    >
      <div
        className={`${
          clicks.includes("/") ? `h-[${files.length * 29.2}px]` : "h-[30px]"
        } overflow-hidden gap-1 flex flex-col duration-700`}
      >
        <MyFolder
          onClicks={() => {
            setCurrentDir("/");
          }}
          onClick={() => {
            clickHere("/");
          }}
          name="computer"
          directory="/"
          index="/"
          clicks={clicks}
          width="2rem"
        />
        <div className="pl-2 flex gap-1 flex-col">
          {files.map(
            (file, index) =>
              !fs.lstatSync(path.join("/", file)).isFile() && (
                <div key={index}>
                  <MyFolder
                    select={selected}
                    onClick={() => {
                      clickHere(path.join("/", file));
                    }}
                    cursor="pointer"
                    index={path.join("/", file)}
                    clicks={clicks}
                    name={file}
                  />
                  {clicks.includes(path.join("/", file)) && (
                    <Clickes clicks={clicks} clik={path.join("/", file)} />
                  )}
                </div>
              )
          )}
        </div>
      </div>
      <div
        ref={ken}
        onDrag={(e) => {
          setWidth(e.screenX);
        }}
        onDragEnd={(e) => setWidth(e.screenX)}
        className="cursor-ew-resize border-[gray] border-r-[1px] border-solid"
      ></div>
    </div>
  );
}

export default Sidebar;
