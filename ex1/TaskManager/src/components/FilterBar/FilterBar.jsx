import React from "react";
import "../../components/FilterBar/FilterBar.css";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const StatusBar = ({ taskList, setStatusFilter, theme, setTheme }) => {
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
			<button
				className="themebutton"
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			>
				{theme === "light" ? "🌙" : "☀️"}
			</button>

			<button
				className="status-filter-btn"
				onClick={() => handleStatusClick(null)}
			>
				<span className="status-name">All</span>
				<span className="status-count"> ({taskList.length})</span>
			</button>
			{statuses.map((status) => (
				<button
					key={status}
					className="status-filter-btn"
					onClick={() => handleStatusClick(status)}
				>
					<span className="status-name">{status}</span>
					<span className="status-count">
						{" "}
						({statusCounts[status] || 0})
					</span>
				</button>
			))}
		</div>
	);
};

export default StatusBar;
