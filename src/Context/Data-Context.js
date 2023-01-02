import React, { useState, createContext } from "react";

export const DataContext = createContext({
  arr: [],
  size: 0,
});

export const DataProvider = ({ children }) => {
  // const problemArr = [
  //   [1, 1, 1, 1],
  //   [1, 1, 1, 1],
  //   [1, 1, 1, 1],
  //   [1, 1, 1, 1],
  // ];

  // const [arr] = useState(problemArr);
  // const [size] = useState(problemArr.length);
  // const value = { arr, size };

  const problemArr = [];
  const [arr, setArr] = useState(problemArr);

  const [size, setSize] = useState(problemArr.length);

  const value = { arr, setArr, size, setSize };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
