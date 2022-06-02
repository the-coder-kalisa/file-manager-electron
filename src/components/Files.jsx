import React from "react";
import { FileOpen } from "@mui/icons-material";
function Files(props) {
  console.log(props);
  return (
    <div className="flex flex-col gap-2 cursor-pointer items-center">
      <FileOpen style={{...props, height: props.width, color: 'gray'}}/>
      <span className="font-bold">{props.name}</span>
    </div>
  );
}

export default Files;
