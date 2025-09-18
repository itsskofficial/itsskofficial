"use client";

import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState("dark");

	useEffect(() => {
		const savedMode = localStorage.getItem("themeMode") || "dark";
		setMode(savedMode);
	}, []);

	useEffect(() => {
		// This sets the class on the <html> tag for CSS styling
		document.documentElement.className = mode;
		// This saves the user's preference for future visits
		localStorage.setItem("themeMode", mode);
	}, [mode]);

	const toggleMode = () => {
		setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider value={{ mode, toggleMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
