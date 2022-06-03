import React from "react";
import { FileOpen } from "@mui/icons-material";
function Files(props) {
  return (
    <div className="flex flex-col w-fit gap-2 cursor-pointer items-center">
      <FileOpen style={{...props, height: props.width, color: 'gray'}}/>
      <span className="font-bold max-w-[7rem] truncate">{props.name}</span>
    </div>
  );
}

export default Files;
