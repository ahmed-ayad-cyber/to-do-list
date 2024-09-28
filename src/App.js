import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [tasks, setTask] = useState([]);
  const inputValue = useRef()

  const handelAdd = () => {
    const taskValue = inputValue.current.value.trim();
    const taskObj = { complet: false, taskValue };
    if (taskValue) {
      taskValue && setTask([...tasks, taskObj]);
      inputValue.current.value = "";
    }
  }

  const handelComplet = (index) => {
    const taskObjToArray = [...tasks]
    taskObjToArray[index].complet = !taskObjToArray[index].complet;
    setTask(taskObjToArray);
  }

  const handelDelet = (index) => {
    const taskObjToArray = [...tasks];
    taskObjToArray.splice(index, 1);
    setTask(taskObjToArray);
  };
  return (
    <>
      <div className="to-do">
        <h1>TO DO LIST</h1>
        <div className="inp-cont">
          <input ref={inputValue}/>
          <button onClick={handelAdd}>add</button>
        </div>
        <ul>
          {tasks.map((task ,index) => {
            return (
              <div className="task">
                <li
                  onClick={() => {
                    handelComplet(index);
                  }}
                  className={task.complet ? "no" : ""}
                >
                  {task.taskValue}
                </li>
                <button on onClick={() => { handelDelet(index);}}>
                  Delet
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
