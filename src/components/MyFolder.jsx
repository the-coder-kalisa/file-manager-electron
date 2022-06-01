import { ChevronRight, Folder } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
const fs = window.require("fs");
function MyFolder(props) {
  const [subFolder, setSubFolder] = useState(false);
  useEffect(() => {
    fs.readdir(props.directory, (_e, files) => {
      files?.length > 0 &&
        files
          .map((file) => fs.lstatSync(`${props.directory}/${file}`).isFile())
          .includes(false) &&
        setSubFolder(true);
    });
  }, [props]);
  return (
    <div
      className={`flex cursor-pointer ${!subFolder && "gap-2"} items-center`}
    >
      {subFolder && (
        <ChevronRight
          {...props}
          style={
            props.clicked || props?.clicks?.includes(props.index)
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
      <div className="flex items-center">
        <Folder
          style={
            !subFolder
              ? { ...props, color: "gray", marginLeft: "1.5rem" }
              : { ...props, color: "gray" }
          }
        />
        <span className="text-lg">{props.name}</span>
      </div>
    </div>
  );
}

export default MyFolder;
