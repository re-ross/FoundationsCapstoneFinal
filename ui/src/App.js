import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import SidebarRight from "./components/SidebarRight"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <SidebarRight />
    </div>
  );
}

export default App