'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MuLink from './ui/MuLink'
import styles from './page.module.css'
import {
  ElCenterGlowSvg,
  ElCode,
  ElHeadBanDescription,
  ElShadowSvg,
  ElThreeCellWrapper,
  Eltagparg,
} from './el/paragraph'
import MuBulb from './ui/MuBulb'
import { ItemsProps } from './el/elements'
import { MuCheckList, MuRadioList, MuSelectList } from './el/smallcontrol'
import React, { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [age,setAge] = useState('')
  const ages: ItemsProps = {
    list: [{key: '0-2',value:'0-2'},{key: '3-4',value: '3-4'},{key: '5-10',value: '5-10'},{key:'10 or over', value: '10 or over'}]
  }
  const ageChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
    setAge(event.target.value)
  }

  return (
    
    <main className='flex flex-col min-h-screen justify-between justify-items-center p-[6rem]'>

      <ElHeadBanDescription>
        
        <Eltagparg variant='plight'>
          Get second by editing&nbsp;<ElCode>src/app/page.tsx</ElCode>
        </Eltagparg>
        <MuLink
          sx={{ textDecorationLine: 'none', color: 'inherit' }}
          href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          By{' '}
          <Image
            src='/vercel.svg'
            alt='Vercel Logo'
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </MuLink>
      </ElHeadBanDescription>
      <ElCenterGlowSvg>
        <Image
          className='relative'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
        <ElShadowSvg variant='blocksquare'>
          <Image src='/thirteen.svg' alt='13' width={40} height={31} priority />
        </ElShadowSvg>
      </ElCenterGlowSvg>

      <ElThreeCellWrapper>
        <MuBulb
          title='Docs'
          href='https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          
          target='_blank'
          rel='noopener noreferrer'
        >
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </MuBulb>

        <MuBulb
          title='Templates'
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          
          target='_blank'
          rel='noopener noreferrer'
        >
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </MuBulb>

        <MuBulb
          title='Deploy'
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          
          target='_blank'
          rel='noopener noreferrer'
        >
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </MuBulb>
      </ElThreeCellWrapper>
    </main>
  )
}
