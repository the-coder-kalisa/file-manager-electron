import React, { useState } from "react";
import {
  ArrowBack,
  ArrowForward,
  ContentCut,
  Delete,
  ContentCopy,
  ArrowUpward,
  CreateNewFolder,
  NoteAdd,
  Search,
  Close,
} from "@mui/icons-material";
function Navigation() {

  return (
    <div className="bg-white border-2 fixed top-0 w-full border-solid text-black items-center h-[4rem] px-3 flex justify-between">
      <div className="flex gap-2">
        <ArrowBack style={{width: '1.8rem', height: '1.8rem'}}/>
        <ArrowForward style={{width: '1.8rem', height: '1.8rem'}}/>
        <ArrowUpward style={{width: '1.8rem', height: '1.8rem'}}/>
      </div>
      <div className="flex gap-3">
        <ContentCopy style={{width: '1.8rem', height: '1.8rem'}}/>
        <ContentCut style={{width: '1.8rem', height: '1.8rem'}}/>
        <NoteAdd style={{width: '1.8rem', height: '1.8rem'}}/>
        <CreateNewFolder style={{width: '1.8rem', height: '1.8rem'}}/>
        <Delete style={{width: '1.8rem', height: '1.8rem'}}/>
      </div>
      <div className="border-2 gap-3 rounded-md border-solid h-[3rem] px-3 flex items-center">
        <Search style={{width: '1.8rem', height: '1.8rem'}}/>
        <input className={`bg-transparent w-[10rem] outline-none`}/>
        <Close style={{width: '1.8rem', height: '1.8rem'}}/>
      </div>
    </div>
  );
}

export default Navigation;
