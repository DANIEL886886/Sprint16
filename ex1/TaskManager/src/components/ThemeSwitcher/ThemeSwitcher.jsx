import React from "react";

const ThemeSwitcher = ({ theme, setTheme }) => {
	const handleThemeChange = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<></>
	);
};

export default ThemeSwitcher;