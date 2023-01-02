import React from "react";
import { Fragment } from "react";
import Block from "../Blocks/Block";

import Cells from "../Cells/Cells";
import Home from "../Home/Home";
import Path from "../Paths/Path";
import Start from "../Start/Start";
import "./Maze.css";

const Maze = ({ arr, size }) => {
  // console.log(arr, size);
  const newArr = arr.map((row, i) => {
    return (
      <Fragment key={i}>
        {row.map((ele, j) => {
          if (i === 0 && j === 0) {
            return <Start key={`${i},${j}`} />;
          }

          if (i === arr.length - 1 && j === size - 1) {
            return <Home key={`${i},${j}`} />;
          }

          if (ele === 0) {
            return <Block key={`${i},${j}`} i={i} j={j} />;
          }

          if (ele === 1) {
            return <Cells key={`${i},${j}`} i={i} j={j} />;
          }

          if (ele === 2) {
            return <Path key={`${i},${j}`} />;
          } else return <h1>Hello</h1>;
        })}
      </Fragment>
    );
  });

  return (
    <div
      className="problem-setup"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
    >
      {newArr}
    </div>
  );
};

export default Maze;
