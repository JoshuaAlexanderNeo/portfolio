import type React from "react";
import Project from "./Project";

const Projects: React.FC = () => {
	return (
		<div id="Projects" className="container mx-auto w-full h-full mt-56">
			<h1 className="flex justify-center text-6xl mb-10 font-semibold font-robotoCondensed dark:text-gray-100">
				Projects
			</h1>
			<Project
				tagList={["Next.js", "React", "TailwindCSS"]}
				title={"Personal Portfolio Website"}
				description={
					"This is the website you are currently on! It is created soley by me with TailwindCSS and NextJs to showcase my work"
				}
				github={"https://github.com/JoshuaAlexanderNeo/portfolio"}
				image={"/portfolio-website.png"}
			/>

			<Project
				tagList={["Javascript", "Browser Extension"]}
				title={"Lichess2Chess"}
				description={
					"This is a browser extension to convert Lichess Glicko ratings to Chess.com ELO ratings. Does regressions from data from for each main chess category (Classical, Blitz, Rapid, and Bullet) and displays your equivalent Chess.com rating in Green beside your Lichess.org rating. Supports both Firefox and Chrome."
				}
				github={"https://github.com/JoshuaAlexanderNeo/Lichess2Chess"}
				site={
					"https://chromewebstore.google.com/detail/lichess2chess/mdjhjmefckhheleoegfcobijefkpfppo"
				}
				image={"/lichess2chess.png"}
			/>

			<Project
				tagList={["Typescript", "Next.js"]}
				title={"Solo DnD Gamemaster Emulator"}
				description={
					"This is a Solo DnD Gamemaster Emulator that allows you to play Dungeons and Dragons by yourself. Launching shortly!"
				}
				github={"https://github.com/JoshuaAlexanderNeo/SoloDnD"}
				site="https://mythic-gme-2.vercel.app/"
				image={"/mythic-gme.png"}
			/>

			<Project
				tagList={["Javascript", "React", "Vite"]}
				title={"Dominions 6 Pretender Calculator"}
				description={
					"I migrated this open source project from Create-React-App to Vite and overhauled the UI to make it more usable."
				}
				github={"https://github.com/zollqir/pretenders-dom6"}
				site={"https://zollqir.github.io/pretenders-dom6/"}
				image={"/dominions-6.png"}
			/>
		</div>
	);
};

export default Projects;
