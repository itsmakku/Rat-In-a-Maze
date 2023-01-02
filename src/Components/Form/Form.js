import { useContext, useRef } from "react";
import { DataContext } from "../../Context/Data-Context";
import classes from "./Form.module.css";

const Form = (props) => {
  const { arr, setArr, size, setSize } = useContext(DataContext);

  const rowRef = useRef();
  const columnRef = useRef();
  const nameRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const row = rowRef.current.value;
    const column = columnRef.current.value;

    // console.log(row, column);
    const array = new Array(Number(row))
      .fill(1)
      .map(() => new Array(Number(column)).fill(1));
    setArr(array);
    setSize(array[0].length);

    // console.log(JSON.stringify(arr));
    props.setName(nameRef.current.value);
    props.showMaze(true);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <label htmlFor="row">NAME : </label>
      <input type="text" ref={nameRef} required />
      <br />
      <label htmlFor="row">ROWS : </label>
      <input type="number" min="3" max="9" ref={rowRef} required />
      <br />
      <label htmlFor="column">COLUMNS : </label>
      <input type="number" min="3" max="9" ref={columnRef} required />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
