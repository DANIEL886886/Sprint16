import "./App.css";
import React, {useState} from "react";
import { data } from "./components/AppData/Data";
import TaskCard from "./components/TaskCard/TaskCard";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {
 const [taskList, setTaskList] = useState(data);

 const onDeleteTask = (id) => {
 setTaskList(taskList.filter((task) => task.id !== id));
};

const addNewTask = (formData) => {
 // console.log("task from APP.js: ", formData);
 setTaskList((prevState) => [
   ...prevState,
  {
   ...formData,
  dueDate: new Date(formData.dueDate),
  id: "T-" + prevState.length,
  },
]);
// console.log(setTaskList);
};

 const [focusTaskId, setFocusTaskId] = useState("");

return (
 <div className="app-container">
 <div className="app-content">
  {taskList.map((props, index) => (
   <TaskCard
   isFocused={focusTaskId === props.id}
   markAsFocus={() => setFocusTaskId(props.id)}
   key={index}
   id={props.id}
   status={props.status}
   details={props.details}
   dueDate={props.dueDate}
   onDeleteTask={onDeleteTask}
   />
  ))}
 </div>

 <div className="side-bar-right">
 <div className="side-bar-card">
   <h3>Create Task</h3>
   <TaskForm addNewTask={addNewTask} />
  </div>
</div>
</div>
);
}

export default App;
