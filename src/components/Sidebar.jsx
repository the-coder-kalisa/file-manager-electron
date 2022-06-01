import React, { useState, useEffect } from "react";
import MyFolder from "../components/MyFolder.jsx";
const fs = window.require("fs");
const path = window.require("path");

function Sidebar() {
  const [files, setFiles] = useState([]);
  const [currentDir, setCurrentDir] = useState("/");
  useEffect(() => {
    fs.readdir("/", (err, files) => {
      if (err) return console.log(err);
      setFiles(files);
    });
  }, []);
  const [clicked, setClicked] = useState(true);
  const [clicks, setClicks] = useState([]);
  const clickHere = (index) => {
    let clicked = clicks.filter((clicks) => clicks !== index);
    clicks.includes(index) ? setClicks(clicked) : setClicks([...clicks, index]);
  };
  const [directories, setDirectories] = useState([]);
  const AllClicks = ({ file }) => {
    fs.readdir(file, (err, files) => {
      if (err) return console.log(err);
      if (files) return <div>e</div>;
    });
  };
  return (
    <div className="flex h-fit gap-10 py-2 px-2 w-[15rem]">
      <div
        className={`${
          clicked ? `h-[${files.length * 29.2}px]` : "h-[30px]"
        } overflow-hidden duration-700`}
      >
        <MyFolder
          clicked={clicked}
          onClick={() => [setClicked(!clicked)]}
          name="computer"
          directory="/"
          width="2rem"
        />
        <div className="pl-2">
          {files.map(
            (file, index) =>
              !fs.lstatSync(path.join("/", file)).isFile() && (
                <div key={index}>
                  <MyFolder
                    cursor="pointer"
                    clicked={false}
                    index={index}
                    onClick={() => {
                      clickHere(index);
                      AllClicks(path.join("/", file));
                    }}
                    clicks={clicks}
                    name={file}
                    directory={path.join("/", file)}
                  />
                  {clicks.includes(index) && <AllClicks file={path.join("/", file)} />}
                </div>
              )
          )}
        </div>
      </div>
      <div className="cursor-ew-resize border-[gray] border-r-[1px] border-solid"></div>
    </div>
  );
}

export default Sidebar;
