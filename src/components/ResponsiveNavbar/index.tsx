"use client";

import type React from "react";
import { useState } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";

const smoothScrollTo = (elementId: string) => {
	const element = document.getElementById(elementId);
	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	}
};

export const ResponsiveNavBar: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const handleNavClick = (page: string) => {
		smoothScrollTo(page);
		setMenuOpen(false); // Close mobile menu after clicking
	};

	const navLinks = pages.map((page) => (
		<button
			type="button"
			key={page}
			className="no-underline text-gray-600 lg:text-gray-50 font-semibold hover:text-gray-300 dark:text-black bg-transparent border-none cursor-pointer"
			onClick={() => handleNavClick(page)}
		>
			{page}
		</button>
	));

	return (
		<div className="bg-transparent ">
			<Navbar
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				navLinks={navLinks}
			/>
			{menuOpen && <MobileMenu>{navLinks}</MobileMenu>}
		</div>
	);
};

const pages: string[] = ["About Me", "History", "Projects", "Contact"];

interface NavbarProps {
	menuOpen: boolean;
	setMenuOpen: (open: boolean) => void;
	navLinks: React.ReactNode[];
}

interface MobileMenuProps {
	children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen, navLinks }) => {
	const { isDark, toggleDarkMode } = useDarkMode();

	return (
		<div className="flex items-center justify-between p-4">
			<div className="flex items-center">
				<span className="inline-flex w-14 h-14 lg:mt-4 border-black font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full dark:text-white dark:border-white">
					JA
				</span>
			</div>
			<nav className="hidden lg:flex items-center gap-4 text-xl">
				{navLinks}
				<button
					type="button"
					onClick={toggleDarkMode}
					className="p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
					aria-label="Toggle dark mode"
				>
					{isDark ? (
						<svg
							className="w-5 h-5 text-white"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<title>Toggle dark mode</title>
							<path
								fillRule="evenodd"
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								clipRule="evenodd"
							/>
						</svg>
					) : (
						<svg
							className="w-5 h-5 text-gray-700"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<title>Toggle light mode</title>
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
					)}
				</button>
			</nav>
			<div className="flex items-center lg:hidden space-x-2">
				<button
					type="button"
					onClick={toggleDarkMode}
					className="p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
					aria-label="Toggle dark mode"
				>
					{isDark ? (
						<svg
							className="w-5 h-5 text-white"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<title>Toggle dark mode</title>
							<path
								fillRule="evenodd"
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								clipRule="evenodd"
							/>
						</svg>
					) : (
						<svg
							className="w-5 h-5 text-gray-700"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<title>Toggle light mode</title>
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
					)}
				</button>
				<button
					type="button"
					aria-label="Toggle mobile menu"
					onClick={() => setMenuOpen(!menuOpen)}
					className="rounded focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
				>
					<MenuAlt4Svg menuOpen={menuOpen} />
				</button>
			</div>
		</div>
	);
};

const MobileMenu: React.FC<MobileMenuProps> = ({ children }) => (
	<nav className="p-4 flex flex-col absolute w-screen space-y-6 lg:hidden bg-white dark:bg-gray-800">
		{children}
	</nav>
);

interface MenuAlt4SvgProps {
	menuOpen: boolean;
}

const MenuAlt4Svg: React.FC<MenuAlt4SvgProps> = ({ menuOpen }) => (
	<>
		<svg
			viewBox="64 64 896 896"
			focusable="false"
			data-icon="menu"
			width="1em"
			height="1em"
			className={`transition text-gray-600 duration-100 ease h-8 w-8 ${menuOpen ? "transform rotate-90" : ""}`}
			fill="currentColor"
			aria-hidden="true"
		>
			<path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
		</svg>
	</>
);
