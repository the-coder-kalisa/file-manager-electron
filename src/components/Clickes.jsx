import React, { useContext } from "react";
import MyFolder from "../components/MyFolder.jsx";
import { ContextProvider } from "../context/Click.js";
const fs = window.require("fs");
const path = window.require("path");
const Clickes = ({ clik, clicks }) => {
  const files = fs.readdirSync(clik, (err, files) => {
    if (err) return console.log(err);
    files.map((file) => file);
  });
  const { clickHere } = useContext(ContextProvider);
  console.log(clik)
  return (
    files
      .map((file) => fs.lstatSync(path.join(clik, file)).isFile())
      .includes(false) && (
      <div className="pl-3">
        {files.map((file, index) => (
          <div key={index}>
            {!fs.lstatSync(path.join(clik, file)).isFile() && (
              <div>
                <MyFolder
                  index={path.join(clik, file)}
                  clicks={clicks}
                  onClick={() => clickHere(path.join(clik, file))}
                  directory={path.join(clik, file)}
                  name={file}
                />
                {clicks.includes(path.join(clik, file)) && (
                  <Clickes clicks={clicks} clik={path.join(clik, file)} />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  );
};
export default Clickes;
