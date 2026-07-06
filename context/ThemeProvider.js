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
		const root = document.documentElement;
		root.classList.remove("light", "dark");
		root.classList.add(mode, "theme-transition");
		localStorage.setItem("themeMode", mode);

		const timer = setTimeout(() => {
			root.classList.remove("theme-transition");
		}, 250);
		return () => clearTimeout(timer);
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
