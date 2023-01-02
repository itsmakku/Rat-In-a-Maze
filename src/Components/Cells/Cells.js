import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../../Context/Data-Context";
import "./Cells.css";

const Cells = (props) => {
  const { arr, size } = useContext(DataContext);
  const [background, setBackGround] = useState("white");
  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    let i = props.i;
    let j = props.j;
    if (!isClicked) {
      arr[i][j] = 0;
      setIsClicked(true);
      setBackGround("red");
    }
    if (isClicked) {
      arr[i][j] = 1;
      setIsClicked(false);
      setBackGround("white");
    }
    // console.log(i, j);
  };

  return <div className={background} onClick={clickHandler}></div>;
};

export default Cells;
