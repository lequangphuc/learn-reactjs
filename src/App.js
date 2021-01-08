import "./App.css";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import PostFeature from "./features/Post";
import Clock from "./components/Clock";
import MagicBox from "./components/MagicBox";
import { useState } from "react";
import CounterFeature from "./features/Counter";

function App() {
  const [showClock, setShowClock] = useState(true);
  return (
    <div className="App">
      {/* <TodoFeature /> */}
      {/* <AlbumFeature /> */}
      {/* <PostFeature /> */}

      {/* {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button> */}

      {/* <MagicBox /> */}
      <CounterFeature />
    </div>
  );
}

export default App;
