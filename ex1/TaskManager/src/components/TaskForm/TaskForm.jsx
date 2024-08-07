import "./TaskForm.css";
import { useState, useEffect } from "react";

function TaskForm(props) {
	const initialFormData = {
		status: "To-Do",
		dueDate: "",
		details: "",
	};

	const [formData, setFormData] = useState(initialFormData);
	const [error, setError] = useState(null);

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
		if (!formData.status || !formData.dueDate || !formData.details) {
			setError("Please fill in all fields");
			return;
		}
		setError(null);
		// console.log("FormData is : ", formData);
		setFormData({ ...initialFormData });
		props.addNewTask(formData);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				{error && <p style={{ color: "red" }}>{error}</p>}
				<div className="form-row">
					<label htmlFor="status">Task Status</label>
					<select
						id="status"
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
						id="dueDate"
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
						id="details"
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