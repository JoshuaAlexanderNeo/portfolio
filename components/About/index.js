import React from 'react'

const About = () => {
  return (
    <section id='About Me' className='container mx-auto w-1/2 h-full mt-28 mb-56'>
      <div className='flex justify-center text-5xl mb-10 font-semibold font-robotoCondensed'>About Me</div>
      <div className='flex'>
        <div>
          <span className='italic text-3xl'>Hello! 👋</span>
          <p className='text-justify mt-4 leading-tight tracking-tight'>
            I&apos;m <strong>Joshua Alexander</strong>, a full-stack developer from BC, Canada. I graduated from Acadia University in 2020 with a BSc. in <strong>Computer Science</strong> (3.81 GPA).
            I love working with Javascript frameworks, and my preferred frameworks are Next.js, <strong>React</strong>, and <strong>Node.js</strong>—and recently I&apos;ve been loving TailwindCSS!
            I&apos;m also a big fan of the open-source community, and I&apos;m always looking to contribute to open-source projects. I also like writing small Python scripts to automate small tasks,
            crawl websites, and other small projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
