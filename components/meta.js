import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>gaizka | Frontend Developer</title>
      <meta name="description" content="gaizka.me Website" />
      <meta name="theme-color" content="#f97316" />
      <link rel="icon" href="/favicons/favicon.svg" />
      <link rel="mask-icon" href="/favicons/mask-icon.svg" color="#000000" />

      <meta property="og:url" content="https://gaizka.me" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="gaizka | Frontend Developer" />
      <meta property="og:description" content="gaizka.me Website" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@gaizkadev" />
      <meta name="twitter:creator" content="@gaizkadev" />
      <meta name="twitter:title" content="gaizka | Frontend Developer" />
      <meta name="twitter:description" content="gaizka.me Website" />
      <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />

    </Head>
  )
}
