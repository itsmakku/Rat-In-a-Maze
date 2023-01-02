import { useContext, useState } from "react";
import { Fragment } from "react";
import { DataContext } from "../../Context/Data-Context";
import Maze from "../Mazes/Maze";
import "./Solution.css";

const Solution = () => {
  const { arr, size } = useContext(DataContext);

  const visArr = [];
  const ans = [];

  for (let r = 0; r < arr.length; r++) {
    let temp = [];
    for (let c = 0; c < size; c++) {
      temp.push(0);
    }
    visArr.push(temp);
  }
  // console.log(visArr);

  const dirI = [1, 0, 0, -1];
  const dirJ = [0, -1, 1, 0];

  function solve(i, j, problemArr, visArr, dirI, dirJ, solutionArr, n) {
    if (i === arr.length - 1 && j === n - 1) {
      let temp = JSON.parse(JSON.stringify(visArr));
      let a = [];
      for (let r = 0; r < arr.length; r++) {
        let b = [];
        for (let c = 0; c < size; c++) {
          if (temp[r][c] === 0 && problemArr[r][c] === 1) {
            b.push(1);
          } else {
            b.push(temp[r][c]);
          }
        }
        a.push(b);
      }
      // console.log(JSON.stringify(a));
      // solutionArr.push(temp);
      solutionArr.push(a);
      return;
    }

    for (let ind = 0; ind < arr.length; ind++) {
      let nextI = i + dirI[ind];
      let nextJ = j + dirJ[ind];

      if (
        nextI >= 0 &&
        nextJ >= 0 &&
        nextI < arr.length &&
        nextJ < n &&
        visArr[nextI][nextJ] === 0 &&
        problemArr[nextI][nextJ] === 1
      ) {
        visArr[i][j] = 2;
        solve(nextI, nextJ, problemArr, visArr, dirI, dirJ, solutionArr, n);
        visArr[i][j] = 0;
      }
    }
  }

  const [flag, setFlag] = useState(false);
  const [sol, setSol] = useState([]);
  const [path, setPath] = useState(0);

  function getAllData() {
    // console.log(arr.length, size);
    solve(0, 0, arr, visArr, dirI, dirJ, ans, size);
    let temp = ans.map((arr, inx) => {
      return (
        <Fragment key={inx}>
          <Maze arr={arr} size={size} />
        </Fragment>
      );
    });
    setSol(temp);
    setPath(temp.length);
    setFlag(true);
  }
  return (
    <>
      <div className="btn-container">
        <button onClick={getAllData}>Get Result</button>
        <h3>Total Path : {flag ? path : ""}</h3>
      </div>
      <div className="solution-container">{sol}</div>
    </>
  );
};

export default Solution;
