import "./App.css";
import React, { useState, useEffect } from "react";
import { data as initialData } from "./components/AppData/Data";
import TaskCard from "./components/TaskCard/TaskCard";
import TaskForm from "./components/TaskForm/TaskForm";

// Helper functions to handle localStorage
const loadTasksFromLocalStorage = () => {
	const tasks = localStorage.getItem("tasks");
	return tasks
		? JSON.parse(tasks, (key, value) => {
				// Revive Date objects
				if (key === "dueDate") return new Date(value);
				return value;
		  })
		: initialData;
};

const saveTasksToLocalStorage = (tasks) => {
	localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Custom ID generator
const generateTaskId = (taskList) => {
	const maxId = taskList.reduce((max, task) => {
		const taskId = parseInt(task.id.split("-")[1], 10);
		return taskId > max ? taskId : max;
	}, 0);
	return `T-${maxId + 1}`;
};

function App() {
	const [taskList, setTaskList] = useState(loadTasksFromLocalStorage);
	const [counter, setCounter] = useState(loadTasksFromLocalStorage().length);

	useEffect(() => {
		saveTasksToLocalStorage(taskList);
	}, [taskList]);

	const onDeleteTask = (id) => {
		setTaskList((prevState) => {
			const newTaskList = prevState.filter((task) => task.id !== id);
			setCounter(newTaskList.length);
			return newTaskList.map((task, index) => ({
				...task,
				id: `T-${index + 1}`,
			}));
		});
	};

	const addNewTask = (formData) => {
		const dueDate = new Date(formData.dueDate);
		setTaskList((prevState) => [
			...prevState,
			{ ...formData, dueDate, id: `T-${prevState.length + 1}` },
		]);
		setCounter((prevState) => prevState + 1);
	};

	const onEditTask = (
		id,
		updatedTaskDetails,
		updatedTaskStatus,
		updatedDueDate
	) => {
		if (!updatedTaskDetails.trim()) {
			console.error("Cannot update task with empty details");
			return;
		}
		setTaskList((prevState) =>
			prevState.map((task) => {
				if (task.id === id) {
					return {
						...task,
						details: updatedTaskDetails,
						status: updatedTaskStatus,
						dueDate: updatedDueDate,
					};
				}
				return task;
			})
		);
	};

	const [focusTaskId, setFocusTaskId] = useState("");

	return (
		<div className="app-container">
			<div className="app-content">
				{taskList.map((task) => (
					<TaskCard
						isFocused={focusTaskId === task.id}
						markAsFocus={() => setFocusTaskId(task.id)}
						key={task.id} // Use unique id as key
						id={task.id}
						status={task.status}
						details={task.details}
						dueDate={task.dueDate} // Pass Date object directly
						onDeleteTask={onDeleteTask}
						onEditTask={onEditTask}
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
