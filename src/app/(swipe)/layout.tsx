import React from 'react'
import HeadBar from './headbar'
import { Metadata } from 'next'
import { ThemeProvider } from '@emotion/react'
import { MuCartThemeProvider } from '../ui/MuClientComponentWrap'



// export async function generateMetadata({params, searchParams} ){

// }

export default function SwipeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head></head>
      <body className='bg-carthome-beige'>
        <MuCartThemeProvider>
          <HeadBar></HeadBar>
          {children}
        </MuCartThemeProvider>
      </body>
    </>
  )
}
