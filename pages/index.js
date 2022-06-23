import Head from 'next/head'
import { ResponsiveNavBar } from '../components/ResponsiveNavbar'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
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
        <link href='https://fonts.googleapis.com/css2?family=Cardo&display=swap' rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap' rel='stylesheet'></link>
      </Head>
      <ResponsiveNavBar />
      <Hero />
      <Experience />
    </div>
  )
}
