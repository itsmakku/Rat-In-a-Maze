import React, { useState } from "react";
import Maze from "./Components/Mazes/Maze";
import "./App.css";
import { useContext } from "react";
import { DataContext } from "./Context/Data-Context";
import Solution from "./Components/Solutions/Solution";
import Form from "./Components/Form/Form";

function App() {
  const [showMaze, setShowMaze] = useState(false);
  const { arr, size } = useContext(DataContext);
  const [name, setName] = useState("");

  const openFormHandler = (event) => {
    event.preventDefault();
    setShowMaze(false);
  };

  return (
    <div className="container">
      <div className="problem-container">
        {showMaze && name && (
          <h1>
            <b>
              <i>Hello {name} !</i>
            </b>
          </h1>
        )}
        {showMaze && <button onClick={openFormHandler}>Open Form</button>}
        {!showMaze && <Form showMaze={setShowMaze} setName={setName} />}
        {showMaze && (
          <>
            <h3>Initial Maze</h3>
            <Maze arr={arr} size={size} />
            <Solution />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
