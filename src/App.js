import Home from "./components/Home";
import { useState, createContext } from "react";
export let globalData = createContext();

function App() {
  let [playerVideo, setPlayerVideo] = useState("");
  return (
    <globalData.Provider value={{ playerVideo, setPlayerVideo }}>
      <Home />
    </globalData.Provider>
  );
}

export default App;
