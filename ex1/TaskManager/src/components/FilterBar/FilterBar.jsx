import React from "react";
import "../../components/FilterBar/FilterBar.css"

const StatusBar = ({ taskList, setStatusFilter }) => {
	const statuses = ["To-Do", "In-Progress", "Urgent", "Done"];
	const statusCounts = {};

	taskList.forEach((task) => {
		if (!statusCounts[task.status]) {
			statusCounts[task.status] = 1;
		} else {
			statusCounts[task.status]++;
		}
	});

	const handleStatusClick = (status) => {
		setStatusFilter(status);
	};

	return (
		<div className="status-bar">
			<div
				className="status-filter"
				onClick={() => handleStatusClick(null)}
			>
				<span className="status-name">All</span>
				<span className="status-count"> ({taskList.length})</span>
			</div>
			{statuses.map((status) => (
				<div
					key={status}
					className="status-filter"
					onClick={() => handleStatusClick(status)}
				>
					<span className="status-name">{status}</span>
					<span className="status-count">
						{" "}
						({statusCounts[status] || 0})
					</span>
				</div>
			))}
		</div>
	);
};

export default StatusBar;
