import { useState } from "react";

import "./App.css";
import { content } from "./data";
import Viewer from "./components/viewer/Viewer";

function App() {
  const [list, setList] = useState(content);
  const [activeFolderId, setActiveFolderId] = useState("1");
  const changeFolder = (id) => {
    setActiveFolderId(id);
  };
  return (
    <div>
      <Viewer activeFolderId={activeFolderId} list={list} changeFolder={changeFolder }/>
    </div>
  );
}

export default App;
