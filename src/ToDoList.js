import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // 현재의 Array를 전부 가져옴
    setToDo("");
  }; 
  //console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input 
        onChange={onChange} 
        value={toDo} 
        type="text" 
        placeholder="Write your todo..." 
        />
        <button>Add ToDo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
