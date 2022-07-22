import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto+Condensed&display=swap'
          rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css2?family=Play&display=swap' rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css2?family=Cardo&display=swap' rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap' rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css2?family=Playball&display=swap' rel='stylesheet'></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
