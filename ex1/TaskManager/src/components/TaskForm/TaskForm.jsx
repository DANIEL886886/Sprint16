import "./TaskForm.css";
import { useState, useEffect } from "react";

function TaskForm(props) {
	const initialFormData = {
		status: "To-Do",
		dueDate: "",
		details: "",
	};

	const [formData, setFormData] = useState(initialFormData);

	useEffect(() => {
		setFormData(initialFormData);
	}, []);

	const handleInputChange = (event) => {
		setFormData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("FormData is : ", formData);
		setFormData({ ...initialFormData });
		props.addNewTask(formData);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-row">
					<label htmlFor="status">Task Status</label>
					<select
						id="status" // Added id here
						defaultValue={formData.status}
						name="status"
						onChange={handleInputChange}
						className="input-primary"
					>
						<option value="To-Do">To-Do</option>
						<option value="In-Progress">In-Progress</option>
						<option value="Urgent">Urgent</option>
					</select>
				</div>

				<div className="form-row">
					<label htmlFor="dueDate">Due Date</label>
					<input
						id="dueDate" // Added id here
						value={formData.dueDate}
						name="dueDate"
						onChange={handleInputChange}
						className="input-primary"
						type="date"
					/>
				</div>

				<div className="form-row">
					<label htmlFor="details">Task Details</label>
					<textarea
						id="details" // Added id here
						value={formData.details}
						name="details"
						onChange={handleInputChange}
						className="input-primary"
						cols="30"
						rows="10"
					/>
				</div>

				<div className="form-btn-wrapper">
					<button className="button-primary" type="submit">
						Create Task
					</button>
				</div>
			</form>
		</div>
	);
}

export default TaskForm;
