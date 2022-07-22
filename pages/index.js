import Head from 'next/head'
import { ResponsiveNavBar } from '../components/ResponsiveNavbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/About'

export default function Home({ jsonData }) {
  return (
    <div>
      <Head>
        <title>Joshua Alexander</title>
        <meta name='description' content='A developer portfolio made by/for Joshua Alexander' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ResponsiveNavBar />
      <Hero />
      <div className='bg-gradient-to-b from-white to-blue-50'>
        <About quote={jsonData} />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://programming-quotes-api.herokuapp.com/Quotes/random')
  const jsonData = await response.json()
  console.log('RESPONSE', response)
  return {
    props: { jsonData }
  }
}
