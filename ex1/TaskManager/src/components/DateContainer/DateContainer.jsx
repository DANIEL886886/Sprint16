import "./DateContainer.css";
import React from "react";

function DateContainer(props) {
  const date = new Date(props.date);
  
	const handleDateChange = (e) => {
		props.onDateChange(e.target.value);
	};

	return (
		<div className="due-date">
			<p>Due Date</p>
			{props.isEditMode ? (
				<input
					type="date"
					defaultValue={date.toISOString().split("T")[0]}
					onChange={handleDateChange}
				/>
			) : (
				<p>{date.toLocaleDateString()}</p>
			)}
		</div>
	);
}

export default DateContainer;
