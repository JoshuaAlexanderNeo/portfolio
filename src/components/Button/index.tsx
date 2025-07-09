import type React from "react";

interface ButtonProps {
	buttonStyle: "rounded" | "outline" | "disabled";
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	buttonStyle,
	onClick,
	type = "button",
	children,
}) => {
	const roundedButtonClassNames =
		"bg-blue-500 dark:bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full";

	const outlineButtonClassNames =
		"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";

	const disabledButtonClassNames =
		"bg-blue-500 dark:bg-blue-900 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed";
	return (
		<div className="p-1">
			<button
				className={
					buttonStyle === "rounded"
						? roundedButtonClassNames
						: buttonStyle === "outline"
							? outlineButtonClassNames
							: buttonStyle === "disabled"
								? disabledButtonClassNames
								: ""
				}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
