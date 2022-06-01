import React, { useState, useEffect } from "react";
import MyFolder from "../components/MyFolder.jsx";
const fs = window.require("fs");
const path = window.require("path");

function Sidebar() {
  const [files, setFiles] = useState([]);
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
  const Clickes = ({ clik, clicks }) => {
    const files = fs.readdirSync(clik, (err, files) => {
      if (err) return console.log(err);
      files.map((file) => file);
    });
    return (
      files
        .map((file) => fs.lstatSync(path.join(clik, file)).isFile())
        .includes(false) && (
        <div className="pl-3 flex flex-col gap-1">
          {files.map((file, index) => (
            <div key={index}>
              {!fs.lstatSync(path.join(clik, file)).isFile() && (
                <div>
                  <MyFolder
                    index={path.join(clik, file)}
                    clicks={clicks}
                    onClick={() => clickHere(path.join(clik,file))}
                    directory={path.join(clik, file)}
                    name={file}
                  />
                  {clicks.includes(path.join(clik,file)) && <Clickes clicks={clicks} clik={path.join(clik, file)}/>}
                </div>
              )}
            </div>
          ))}
        </div>
      )
    );
  };
  return (
    <div className="flex h-fit gap-10 py-2 px-2">
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
 <Clickes clicks={clicks} clik={'/'}/>
      </div>
      <div className="cursor-ew-resize border-[gray] border-r-[1px] border-solid"></div>
    </div>
  );
}

export default Sidebar;
