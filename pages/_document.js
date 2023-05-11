import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel='stylesheet' href={mode=='dark'?'/assets/css/menu.css':'/assets/css/menuLight.css'} type='text/css'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}