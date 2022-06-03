import React from 'react'
import Image from 'next/image'
import TypewriterComponent from 'typewriter-effect'
import Button from '../Button'
const Hero = () => {
  return (
    <div>
      <div className='-z-50 w-full h-screen overflow-hidden absolute -mt-16'>
        <Image
          alt='background'
          src={require('../../public/banner02.svg')}
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <div className='h-screen items-center flex -mt-24 ml-20 '>
        <div>
          <h1 className='text-7xl font-robotoCondensed font-bold'>Joshua Alexander</h1>
          <div className='text-5xl font-play text-gray-800 font-light ml-1'>
            <TypewriterComponent
              options={{
                strings: [
                  'Full-stack Developer',
                  'React Enthusiast',
                  'TailwindCSS Lover',
                  'Node.Js Developer',
                  'Javascript User',
                  'Python Scripter',
                  'PostgreSQL Querier',
                  'Express.js Router',
                  'Git Committer',
                  'Next.js Deployer',
                  'Docker Composer',
                  'Chess Player',
                  'Canadian'
                ],
                autoStart: true,
                loop: true
              }}
            />
          </div>
          <div className='mt-10'>
            <Button buttonStyle={'rounded'}>
              <span className='flex items-center'>
                <svg className='fill-current w-4 h-4 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                  <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
                </svg>
                Download Resume
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
