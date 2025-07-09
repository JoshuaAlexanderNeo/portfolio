"use client";
import type React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact: React.FC = () => {
	const [state, handleSubmit] = useForm("mnqwyolp");
	return (
		<div
			id="Contact"
			className="container mx-auto w-full h-full mt-28 dark:text-gray-100"
		>
			<section className="py-6">
				<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
					<div className="py-6 md:py-0 md:px-6">
						<h1 className="text-4xl md: text-center  mb-10 font-semibold font-robotoCondensed">
							Get in touch
						</h1>
						<p className="pt-2 pb-4">
							Fill in the form to start a conversation, or check my socials
							below
						</p>
						<div className="space-y-4">
							<p className="flex items-center">
								<svg
									className="w-5 h-5 mr-2 sm:mr-6 dark:fill-white"
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>LinkedIn</title>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
								<span className="text-blue-500 dark:text-blue-400 hover:dark:text-rose-800 hover:text-rose-400">
									<a href="https://www.linkedin.com/in/joshua-p-alexander">
										joshua-p-alexander
									</a>
								</span>
							</p>
							<p className="flex items-center">
								<svg
									className="w-5 h-5 mr-2 sm:mr-6 dark:fill-white"
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Gmail</title>
									<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
								</svg>
								<span className="text-blue-500 dark:text-blue-400 hover:dark:text-rose-800 hover:text-rose-400">
									<a href="mailto:joshuaalexanderneo@gmail.com">
										JoshuaAlexanderNeo@gmail.com
									</a>
								</span>
							</p>
							<p className="flex items-center">
								<svg
									className="w-5 h-5 mr-2 sm:mr-6 dark:fill-white"
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>GitHub</title>
									<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
								</svg>
								<span className="text-blue-500 dark:text-blue-400 hover:dark:text-rose-800 hover:text-rose-400">
									<a href="https://github.com/joshuaalexanderneo">
										joshuaalexanderneo
									</a>
								</span>
							</p>
							<p className="flex items-center">
								<svg
									className="w-5 h-5 mr-2 sm:mr-6 dark:fill-white"
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Reddit</title>
									<path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
								</svg>
								<span className="text-blue-500 dark:text-blue-400 hover:dark:text-rose-800 hover:text-rose-400">
									<a href="https://www.reddit.com/user/joshuaalexanderneo">
										joshuaalexanderneo
									</a>
								</span>
							</p>
						</div>
					</div>
					{state?.succeeded ? (
						<div className="flex justify-center items-center">
							Thanks for contacting me! I&apos;ll be in touch
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							noValidate
							className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
						>
							<label htmlFor="email" className="block">
								<span className="mb-1">Email address</span>
							</label>
							<input
								id="email"
								type="email"
								name="email"
								placeholder="email@email.com"
								className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-slate-800 p-2 dark:text-gray-100 dark:placeholder-gray-300"
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
							<label htmlFor="message" className="block">
								<span className="mb-1">Message</span>
							</label>
							<textarea
								id="message"
								name="message"
								rows={5}
								className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-slate-800 p-2 dark:placeholder-gray-300"
							></textarea>
							<ValidationError
								prefix="Message"
								field="message"
								errors={state.errors}
							/>
							<button
								type="submit"
								disabled={state.submitting}
								className="self-center px-8 py-3 text-lg rounded bg-blue-500 hover:bg-blue-700 text-white focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-violet-400"
							>
								Submit
							</button>
						</form>
					)}
				</div>
			</section>
		</div>
	);
};

export default Contact;
