"use client";

import { useState, useEffect } from "react";

export const useDarkMode = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// Check for saved theme preference or default to system preference
		const savedTheme = localStorage.getItem("theme");
		const systemPrefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		const shouldBeDark =
			savedTheme === "dark" || (!savedTheme && systemPrefersDark);

		setIsDark(shouldBeDark);
		document.documentElement.classList.toggle("dark", shouldBeDark);
	}, []);

	const toggleDarkMode = () => {
		const newDarkMode = !isDark;
		setIsDark(newDarkMode);

		if (newDarkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	return { isDark, toggleDarkMode };
};
