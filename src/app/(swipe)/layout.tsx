import React from 'react'
import HeadBar from './headbar'
import { Metadata } from 'next';

// export async function generateMetadata({params, searchParams} ){

// }



export default function SwipeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head></head>
      <body className='bg-carthome-beige'>
        <HeadBar></HeadBar>
        {children}
      </body>
    </>
  )
}
