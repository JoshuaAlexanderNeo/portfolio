import React from 'react'
import Project from './Project'

const Projects = () => {
  return (
    <div id='Projects' className='container mx-auto w-full h-full mt-56'>
      <div className='flex justify-center text-5xl mb-10 font-semibold font-robotoCondensed'>Projects</div>
      <Project
        tagList={['Next.js', 'React', 'TailwindCSS']}
        title={'Personal Portfolio Website'}
        description={
          'This is the website you are currently on! It is created soley by me with TailwindCSS and NextJs to showcase my work'
        }
        github={'https://github.com/JoshuaAlexanderNeo/portfolio'}
        image={'portfolio-website.png'}
      />

      <Project
        tagList={['Next.js', 'React', 'TailwindCSS', 'ContentKit']}
        title={'Author Website'}
        description={
          'A freelance author website for an amateur Canadian author. It is created soley by me with TailwindCSS and NextJs to showcase his books, and eventually his series.'
        }
        github={'https://github.com/JoshuaAlexanderNeo/author-website'}
        site={'https://leifmaplesson.ca/'}
        image={'author-website.png'}
      />

      <Project
        tagList={['Javascript', 'Firefox Addon', 'Chrome Extension']}
        title={'Lichess2Chess'}
        description={
          'This is a browser extension to convert Lichess Glicko ratings to Chess.com ELO ratings. Does regressions from data from for each main chess category (Classical, Blitz, Rapid, and Bullet) and displays your equivalent Chess.com rating in Green beside your Lichess.org rating. Supports both Firefox and Chrome.'
        }
        github={'https://github.com/JoshuaAlexanderNeo/Lichess2Chess'}
        image={'lichess2chess.png'}
      />
    </div>
  )
}

export default Projects
