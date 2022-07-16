import React from 'react'
import Head from 'next/head'

const Meta = ({
  title,
  description,
  fonts = [],
  favicon = { svg: null, png: null, touch: null },
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='icon' type='image/svg+xml' href={favicon.svg} />
      {fonts.map((d, i) => {
        return (
          <link
            key={i}
            rel='preload'
            href={d}
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
        )
      })}
      <meta name='theme-color' content='#313131' />
      <link rel='alternate icon' type='image/png' href={favicon.png} />
      <link rel='mask-icon' href={favicon.svg} color='#F4F4F4' />
      <link rel='apple-touch-icon' sizes='180x180' href={favicon.touch} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {/*<meta property='og:image' content={cardProp} />*/}
      <meta property='og:url' content='https://freemansbar.com' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {/*<meta name='twitter:image' content={cardProp} />*/}
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  )
}

export default Meta
