import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com'></link>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Cardo&family=Play&family=Playball&family=Playfair+Display&family=Roboto+Condensed&family=Yanone+Kaffeesatz&display=swap'
          rel='stylesheet'></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
