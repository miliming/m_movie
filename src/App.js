import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1); //현재값에 +1
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("I run only once.");
  }, []);        // 처음에만 실행
  useEffect(() => {
      console.log("I run when 'keyword' changes.");
  }, [keyword]);  // keyword가 변힐때만 실행
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);  // counter 변힐때만 실행
  useEffect(() => {
    console.log("I run when 'keyword' or 'counter' changes.");
  }, [keyword,counter]);  //keywor 또는 counter 변힐때만 실행
  return (
    <div>
      <input 
      value = {keyword}
      onChange={onChange} 
      type="text" 
      placeholder="Search here"/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
