import type React from "react";

const About: React.FC = () => {
	return (
		<section
			id="About Me"
			className="container mx-auto lg:w-1/2 h-full mt-28 mb-56 w-full lg:px-0 px-6"
		>
			<h1 className="flex justify-center text-6xl mb-10 font-semibold font-robotoCondensed dark:text-gray-100">
				About Me
			</h1>
			<div className="flex">
				<div>
					<span className="italic text-4xl dark:text-gray-100">Hello! 👋</span>
					<p className="text-justify text-xl mt-4 leading-tight tracking-tight dark:text-gray-100">
						I&apos;m <strong>Joshua Alexander</strong>, a Full Stack Developer
						from BC, Canada. I graduated from Acadia University in 2020 with a
						BSc. in <strong>Computer Science</strong> (3.81 GPA). I love working
						with Javascript frameworks, and my preferred frameworks are Next.js
						and sometimes Remix. I have been working with React my entire
						career, and I have a passion for building user-friendly interfaces
						and applications. I enjoy using Express or Nest.js on the backend,
						but in general I find the Next.js backend to be sufficient for most
						of my needs. I love Prisma and PostgreSQL. My ideal stack is{" "}
						<strong>Next.js, Prisma, TailwindCSS and PostgreSQL,</strong> that
						is where I feel at home.
						<br />
						<br />
						As for other technologies, I have done data scraping and analytics
						with Python as well, and that is something I enjoy doing in my spare
						time. I love a little python script. 🐍 I&apos;ve dabbled in Go with
						HTMX as well.
						<br />
						<br />
						As you may tell from my projects, I have a passion for Chess,
						roleplaying games, and fantasy video games. I love building tools
						that help people enjoy these hobbies, and I have a few projects in
						the works that I hope to release soon.
						<br />
						<br />I am currently living in Tbilisi, Georgia for the past several
						years working remotely as Full Stack Developer.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
