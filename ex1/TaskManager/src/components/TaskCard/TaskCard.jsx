// TaskCard.js
import "./TaskCard.css";
import Badge from "../Badge/Badge";
import DateContainer from "../DateContainer/DateContainer";
import React, { useState } from "react";

function TaskCard(props) {
	const [isEditMode, setIsEditMode] = useState(false);
	const [editedTaskDetails, setEditedTaskDetails] = useState(props.details);
	const [editedTaskStatus, setEditedTaskStatus] = useState(props.status);
	const [editedTaskDate, setEditedTaskDate] = useState(props.dueDate);
	
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
		console.log("Saving changes on TaskCard no:", props.id);
		console.log("Saving changes with new status:", editedTaskStatus);
		console.log("Saving changes with new details:", editedTaskDetails);
		console.log("Saving changes with new date:", editedTaskDate);
		props.onEditTask(
			props.id,
			editedTaskDetails,
			editedTaskStatus,
			editedTaskDate
		);
		setIsEditMode(false);
	};

	const handleCancelChanges = (e) => {
		e.stopPropagation();
		setIsEditMode(false);
		setEditedTaskDetails(props.details);
		setEditedTaskStatus(props.status);
		setEditedTaskDate(props.dueDate);
	};

	const handleDateChange = (newDate) => {
		setEditedTaskDate(newDate);
	};

	const handleStatusChange = (e) => {
		setEditedTaskStatus(e.target.value);
	};

	const focusedClass = props.isFocused ? "focused" : "";

	function setFocused() {
		props.markAsFocus();
	}

	return (
		<div
			className={`card-wrapper ${focusedClass} ${
				props.theme === "dark" ? "dark-theme" : ""
			}`}
			onClick={setFocused}
		>
			<div className="card-header">
				<p className="task-id">{props.id}</p>
				{isEditMode ? (
					<select
						defaultValue={editedTaskStatus}
						onChange={handleStatusChange}
					>
						<option
							value="To-Do"
							className={
								editedTaskStatus === "To-Do" ? "selected" : ""
							}
						>
							To-Do
						</option>
						<option
							value="In-Progress"
							className={
								editedTaskStatus === "In-Progress"
									? "selected"
									: ""
							}
						>
							In-Progress
						</option>
						<option
							value="Urgent"
							className={
								editedTaskStatus === "Urgent" ? "selected" : ""
							}
						>
							Urgent
						</option>
						<option
							value="Done"
							className={
								editedTaskStatus === "Done" ? "selected" : ""
							}
						>
							Done
						</option>
					</select>
				) : (
					<Badge status={props.status} />
				)}
			</div>

			<div className="card-content">
				{isEditMode ? (
					<textarea
						defaultValue={editedTaskDetails}
						onChange={(e) => setEditedTaskDetails(e.target.value)}
					></textarea>
				) : (
					<p>{props.details}</p>
				)}
			</div>

			<div className="card-footer">
				<DateContainer
					date={isEditMode ? editedTaskDate : props.dueDate}
					isEditMode={isEditMode}
					onDateChange={handleDateChange}
				/>
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
								✅
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
