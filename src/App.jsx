import { useState } from "react";
import "./App.css";
import Blog from "./Blog";

function App() {
  return (
    <div className="App">
      <nav className="w-full text-center p-3 font-bold text-3xl bg-slate-200">
        <h1>BLOG</h1>
      </nav>

      <div className="flex flex-col items-center">
        <Blog color={"bg-rose-700"} />
        <Blog color={"bg-blue-700"} />
      </div>
    </div>
  );
}

export default App;
