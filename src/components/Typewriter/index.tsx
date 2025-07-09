"use client";

import { motion } from "framer-motion";
import type React from "react";
import { useState, useEffect } from "react";

interface TypewriterOptions {
	strings: string[];
	autoStart?: boolean;
	loop?: boolean;
	typeSpeed?: number;
	deleteSpeed?: number;
	delayBetweenStrings?: number;
}

interface TypewriterProps {
	options: TypewriterOptions;
	className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ options, className = "" }) => {
	const {
		strings,
		autoStart = true,
		loop = true,
		typeSpeed = 100,
		deleteSpeed = 50,
		delayBetweenStrings = 2000,
	} = options;

	const [currentStringIndex, setCurrentStringIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [isStarted, setIsStarted] = useState(false);

	useEffect(() => {
		if (!autoStart) return;
		setIsStarted(true);
	}, [autoStart]);

	useEffect(() => {
		if (!isStarted || strings.length === 0) return;

		const currentString = strings[currentStringIndex];

		const timeout = setTimeout(
			() => {
				if (!isDeleting) {
					// Typing
					if (currentText.length < currentString.length) {
						setCurrentText(currentString.slice(0, currentText.length + 1));
					} else {
						// Finished typing, wait then start deleting
						setTimeout(() => setIsDeleting(true), delayBetweenStrings);
					}
				} else {
					// Deleting
					if (currentText.length > 0) {
						setCurrentText(currentText.slice(0, -1));
					} else {
						// Finished deleting, move to next string
						setIsDeleting(false);
						if (loop || currentStringIndex < strings.length - 1) {
							setCurrentStringIndex((prev) =>
								prev === strings.length - 1 ? 0 : prev + 1,
							);
						}
					}
				}
			},
			isDeleting ? deleteSpeed : typeSpeed,
		);

		return () => clearTimeout(timeout);
	}, [
		currentText,
		currentStringIndex,
		isDeleting,
		isStarted,
		strings,
		typeSpeed,
		deleteSpeed,
		delayBetweenStrings,
		loop,
	]);

	return (
		<div className={`inline-flex items-center ${className}`}>
			<span className="inline-block dark:text-gray-300">{currentText}</span>
			<motion.span
				animate={{ opacity: [1, 0] }}
				transition={{
					duration: 0.8,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "easeInOut",
				}}
				className="inline-block ml-1 w-0.5 h-8 bg-current"
			/>
		</div>
	);
};

export default Typewriter;
