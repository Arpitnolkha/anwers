import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Next.js Blog Starter Kit',
    description: 'Clone and deploy your own Next.js portfolio in minutes.',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
  }

  return (
    <Html lang="en">
      <Head>
       Hey Welcome to my site, you can find my answers here.
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
