import Head from 'next/head'
import Image from 'next/image'
import { ResponsiveNavBar } from '../components/ResponsiveNavbar'
import TypewriterComponent from 'typewriter-effect'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Joshua Alexander</title>
        <meta name='description' content='A developer portfolio made by/for Joshua Alexander' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto+Condensed&display=swap'
          rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css2?family=Play&display=swap' rel='stylesheet'></link>
      </Head>
      <ResponsiveNavBar />
      <div className='-z-50 w-full h-screen overflow-hidden absolute -mt-16'>
        <Image alt='background' src={require('../public/pngegg.png')} layout='fill' objectFit='cover' quality={100} />
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
                  'Git Committer'
                ],
                autoStart: true,
                loop: true
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
