import "./TaskCard.css";
import Badge from "../Badge/Badge";
import DateContainer from "../DateContainer/DateContainer";
import React, { useState } from "react";

function TaskCard(props) {
	const [taskId, setTaskId] = useState(props.id);
	const [isEditMode, setIsEditMode] = useState(false);
	const [editedTaskDetails, setEditedTaskDetails] = useState(props.details);
	const [editedTaskStatus, setEditedTaskStatus] = useState(props.status);

	const handleDelete = (e) => {
		e.stopPropagation();
		props.onDeleteTask(props.id);
	};

	const handleEdit = (e) => {
		e.stopPropagation();
		setIsEditMode(true);
	};

	const handleSaveChanges = (e) => {
		e.stopPropagation();
		props.onEditTask(props.id, editedTaskDetails, editedTaskStatus);
		setIsEditMode(false);
	};

	const handleCancelChanges = (e) => {
		e.stopPropagation();
		setIsEditMode(false);
		setEditedTaskDetails(props.details);
		setEditedTaskStatus(props.status);
	};

	const handleStatusChange = (e) => {
		setEditedTaskStatus(e.target.value);
	};

	const focusedClass = props.isFocused ? "focused" : "";

	function setFocused() {
		props.markAsFocus();
	}

	return (
		<div className={`card-wrapper ${focusedClass}`} onClick={setFocused}>
			<div className="card-header">
				<p className="task-id">{taskId}</p>
				{isEditMode ? (
					<select
						value={editedTaskStatus}
						onChange={handleStatusChange}
					>
						<option value="todo">To-Do</option>
						<option value="in-progress">In Progress</option>
						<option value="done">Done</option>
					</select>
				) : (
					<Badge status={props.status} />
				)}
			</div>

			<div className="card-content">
				{isEditMode ? (
					<textarea
						onChange={(e) => setEditedTaskDetails(e.target.value)}
					>
						{editedTaskDetails}
					</textarea>
				) : (
					<p>{props.details}</p>
				)}
			</div>

			<div className="card-footer">
				<DateContainer date={props.dueDate} />
				{props.isFocused ? (
					<button className="task-btn-delete" onClick={handleDelete}>
						Delete
					</button>
				) : (
					""
				)}
				{props.isFocused ? (
					isEditMode ? (
						<>
							<button
								className="task-btn-save"
								onClick={handleSaveChanges}
							>
								✔️
							</button>
							<button
								className="task-btn-cancel"
								onClick={handleCancelChanges}
							>
								❌
							</button>
						</>
					) : (
						<button className="task-btn-edit" onClick={handleEdit}>
							Edit
						</button>
					)
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default TaskCard;
