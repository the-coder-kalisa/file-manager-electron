import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../context/Click";
import FileMe from "./FileMe";

const fs = window.require("fs");
const path = window.require("path");

function Main() {
  const { currentDir,selected, setSelected, setCurrentDir, search } = useContext(ContextProvider);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    fs.readdir(currentDir, (_err, files) => {
      setFiles(files);
      search.length &&
        setFiles(
          files
            .filter((value) =>
              value.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => {
              return a.toLowerCase().startsWith(search.toLowerCase()) ? -1 : 1;
            })
        );
    });
  }, [currentDir, search]);
  // const [show, setShow] = useState(null)
  // const rename = (name) =>{
  //   setShow(selected)
  // }
  useEffect(()=>{
    window.addEventListener('keyup', (e)=>{
      // e.key === "F2" && rename()
    })
  },[selected])
  const changeLoc = (index) => {
    setCurrentDir(
      "/" +
        currentDir
          ?.split("/")
          .slice(1)
          .slice(0, index + 1)
          .join("/")
    );
  };
  return (
    <div className="w-full">
      <div className="border-b-2 flex -ml-1 border-solid">
        {currentDir
          ?.split("/")
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
      {files?.length ? (
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fill,minmax(120px, 1fr))",
          }}
          className="px-3 gap-2 grid w-full"
        >
          {files?.map((file, index) => (
            <div key={index}>
              <FileMe select={selected} onClick={()=>{setSelected(path.join(currentDir, file))}} file={file} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex text-2xl h-[70vh] font-bold tex items-center justify-center">
          No file was found
        </div>
      )}
    </div>
  );
}

export default Main;
