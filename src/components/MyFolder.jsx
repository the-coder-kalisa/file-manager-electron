import { ChevronRight, Folder } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
const fs = window.require("fs");
function MyFolder(props) {
  const [subFolder, setSubFolder] = useState(false);
  useEffect(() => {
    fs.readdir(props.directory, (_e, files) => {
      files.length > 0 && files.map((file)=> fs.lstatSync(`${props.directory}/${file}`).isFile()).includes(false) && setSubFolder(true);
    });
  }, []);
  return (
    <div {...props} className="flex cursor-pointer items-center">
      {subFolder && <ChevronRight style={props.clicked ? {transform: "rotate(90deg)", transitionDuration: 10, transitionProperty: 'all'} : {transform: "rotate(0)", transitionDuration: 100, transitionProperty: 'all'}}/>}
      <Folder style={{ ...props, color: "gray" }} />
      <span className="text-lg">{props.name}</span>
    </div>
  );
}

export default MyFolder;
