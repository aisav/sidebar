import React, { useState } from "react";
import logo from './logo.svg';
import SideBar from "./SideBar"
import './App.css';

function App() {
  const [opened, setOpened] = useState(true);
  
  return (
    <div
      onMouseEnter={() => {
        setOpened(true);
      }}
      onMouseLeave={() => {
        setOpened(false);
      }}
      style={{ display: "inline-block" }}
      class="paragraph"
    >
      <SideBar opened />
    </div>
  );
}

export default App;
