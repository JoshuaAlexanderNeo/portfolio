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
          <div className='text-5xl font-play text-gray-800 font-light ml-1 min-h-[100px]'>
            <TypewriterComponent
              options={{
                strings: [
                  'Full-stack Developer',
                  'Proudly Canadian',
                  'React Enthusiast',
                  'Computer Science Grad',
                  'TailwindCSS Lover',
                  'Node.Js Developer',
                  'Javascripter',
                  'Python Scripter',
                  'PostgreSQL Querier',
                  'Express.js Router',
                  'Git Committer',
                  'Next.js Deployer',
                  'Docker Composer',
                  'Chess Player',
                  'Human Being',
                  'N̵̨͒y̵̹̑a̵͉͝r̴̛͚l̶̞̀a̶̟̚t̷͎͠h̴͍̋ȏ̶̜t̸͉͝e̸̝̊p̶̯̂'
                ],
                autoStart: true,
                loop: true
              }}
            />
          </div>

          <div className='flex items-center'>
            <svg
              className='max-h-10'
              focusable='false'
              ariaHidden='true'
              viewBox='0 0 24 24'
              dataTestid='LocationOnIcon'
              tabIndex='-1'
              title='LocationOn'>
              <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'></path>
            </svg>
            <div className='font-cardo mt-3 italic text-2xl'>Tbilisi, Georgia</div>
          </div>
          <div className='mt-10'>
            <a href={'resume.pdf'} download>
              <Button buttonStyle={'rounded'}>
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
