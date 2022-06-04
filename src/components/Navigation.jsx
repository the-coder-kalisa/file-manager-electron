import React, { useContext, useEffect } from "react";
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
  DriveFileRenameOutlineRounded,
} from "@mui/icons-material";
import { ContextProvider } from "../context/Click";
const path = window.require("path");
function Navigation() {
  const { currentDir, setCurrentDir, search, setSelected, history, setSearch } =
    useContext(ContextProvider);
  const goUp = () => {
    setCurrentDir(path.normalize(`${currentDir}/../`));
    setSelected(null)
  };
  useEffect(()=>{
    window.addEventListener('keyup', (e) =>{
      e.key === "Backspace" && goBack();
    })
  })
  const goBack = () => {
    currentDir !== history[0] &&
      history.length > 1 &&
      setCurrentDir(history[history.lastIndexOf(currentDir) - 1]);
      setSelected(null)
  }
  return (
    <div className="bg-white border-[1px] z-50 border-gray-300 fixed top-0 w-full border-solid text-black items-center h-[4rem] px-3 flex justify-between">
      <div className="flex gap-2">
        <ArrowBack
          className="cursor-pointer"
          onClick={goBack}
          style={{ width: "1.8rem", height: "1.8rem" }}
        />
        <ArrowForward
          className="cursor-pointer"
          style={{ width: "1.8rem", height: "1.8rem" }}
          onClick={() => {
            currentDir !== history[history.length - 1] &&
              setCurrentDir(history[history.indexOf(currentDir) + 1]);
              setSelected(null)
          }}
        />
        <ArrowUpward
          onClick={goUp}
          className="cursor-pointer"
          style={{ width: "1.8rem", height: "1.8rem" }}
        />
      </div>
      <div className="flex gap-3">
        <ContentCopy style={{ width: "1.8rem", height: "1.8rem" }} />
        <ContentCut style={{ width: "1.8rem", height: "1.8rem" }} />
        <DriveFileRenameOutlineRounded style={{ width: "1.8rem", height: "1.8rem" }} />
        <NoteAdd style={{ width: "1.8rem", height: "1.8rem" }} />
        <CreateNewFolder style={{ width: "1.8rem", height: "1.8rem" }} />
        <Delete style={{ width: "1.8rem", height: "1.8rem" }} />
      </div>
      <div className="border-2 gap-3 rounded-md border-solid h-[3rem] px-3 flex items-center">
        <Search style={{ width: "1.8rem", height: "1.8rem" }} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => setSearch("")}
          className={`bg-transparent w-[10rem] outline-none`}
        />
        <Close
          onClick={() => {
            setSearch("");
            document.querySelector("input").focus();
          }}
          className="cursor-pointer"
          style={{ width: "1.8rem", height: "1.8rem" }}
        />
      </div>
    </div>
  );
}

export default Navigation;
