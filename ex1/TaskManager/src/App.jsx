import "./App.css";
import React, { useState, useEffect } from "react";
import { data as initialData } from "./components/AppData/Data";
import TaskViewer from "./components/TaskViewer/TaskViewer";
import FilterBar from "./components/FilterBar/FilterBar";

const loadTasksFromLocalStorage = () => {
	const tasks = localStorage.getItem("tasks");
	return tasks
		? JSON.parse(tasks, (key, value) => {
				if (key === "dueDate") return new Date(value);
				return value;
		  })
		: initialData;
};

const saveTasksToLocalStorage = (tasks) => {
	localStorage.setItem("tasks", JSON.stringify(tasks));
};

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
	const [focusTaskId, setFocusTaskId] = useState("");
	const [statusFilter, setStatusFilter] = useState(null);

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

	const filteredTaskList = taskList.filter((task) => {
		if (!statusFilter) return true;
		return task.status === statusFilter;
	});

	return (
      <div>
			<FilterBar taskList={taskList} setStatusFilter={setStatusFilter} />

      <TaskViewer
				taskList={filteredTaskList}
				focusTaskId={focusTaskId}
				setFocusTaskId={setFocusTaskId}
				onDeleteTask={onDeleteTask}
				onEditTask={onEditTask}
				addNewTask={addNewTask}
			/>
		</div>
	);
}

export default App;
