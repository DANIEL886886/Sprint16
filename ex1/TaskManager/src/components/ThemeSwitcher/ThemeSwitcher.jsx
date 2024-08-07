import React from "react";

const ThemeSwitcher = ({ theme, setTheme }) => {
	const handleThemeChange = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button onClick={handleThemeChange}>
			{theme === "light"
				? "Switch to Dark Theme"
				: "Switch to Light Theme"}
		</button>
	);
};

export default ThemeSwitcher;
