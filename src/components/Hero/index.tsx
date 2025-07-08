'use client'
import React from 'react'
import Button from '../Button'
import Typewriter from '../Typewriter'
import Image from 'next/image'
import bannerImage from '../../../public/banner02.svg'

const Hero: React.FC = () => {
  return (
    <div>
      <div className='-z-50 w-full h-screen overflow-hidden absolute -mt-16'>
        <Image
          alt='background'
          src={bannerImage}
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
      </div>
      <div className='h-screen items-center flex -mt-24 ml-20 text-black dark:text-white'>
        <div>
          <h1 className='sm:text-8xl text-6xl font-yanone '>Joshua Alexander</h1>
          <div className='text-4xl font-robotoCondensed text-gray-800 font-light ml-1 min-h-[100px]'>
            <Typewriter
              options={{
                strings: [
                  'Full-stack Developer',
                  'Typescripter',
                  'Proudly Canadian',
                  'Computer Science Graduate',
                  'React Enthusiast',
                  'Next.js adorer',
                  'TailwindCSS Lover',
                  'Node.js Developer',
                  'Javascripter',
                  'Python Scripter',
                  'PostgreSQL Querier',
                  'Express.js Router',
                  'Git Committer',
                  'Next.js Deployer',
                  'Docker Composer',
                ],
                autoStart: true,
                loop: true
              }}
            />
          </div>

          <div className='flex items-center'>
            <svg
              className='max-h-10 dark:fill-gray-400'
              focusable='false'
              aria-hidden='true'
              viewBox='0 0 24 24'
              tabIndex={-1}
              aria-label='LocationOn'>
              <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'></path>
            </svg>
            <div className='font-robotoCondensed mt-3 italic text-3xl'>Tbilisi, Georgia</div>
          </div>
          <div className='mt-10'>
            <a href={'Joshua_Alexander.pdf'} download>
              <Button buttonStyle={'rounded'} onClick={() => {}}>
                <span className='flex items-center'>
                  <svg className='fill-current w-4 h-4 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                    <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
                  </svg>
                  Download Resume
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
