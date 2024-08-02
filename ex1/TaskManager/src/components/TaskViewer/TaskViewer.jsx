import React from "react";
import TaskCard from "../../components/TaskCard/TaskCard.jsx";
import TaskForm from "../../components/TaskForm/TaskForm.jsx";

const TaskViewer = ({
	taskList,
	focusTaskId,
	setFocusTaskId,
	onDeleteTask,
	onEditTask,
	addNewTask,
}) => {
	return (
		<div className="app-container">
			<div className="app-content">
				{taskList.map((task) => (
					<TaskCard
						isFocused={focusTaskId === task.id}
						markAsFocus={() => setFocusTaskId(task.id)}
						key={task.id}
						id={task.id}
						status={task.status}
						details={task.details}
						dueDate={task.dueDate}
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
};

export default TaskViewer;
