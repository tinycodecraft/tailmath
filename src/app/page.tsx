
'use client'
import '@/styles/globals.css'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MuLink from '@/lib/ui/MuLink'
import NextLink from 'next/link'
import styles from './page.module.css'
import {
  ElCenterGlowSvg,
  ElCode,
  ElHeadBanDescription,
  ElShadowSvg,
  ElThreeCellWrapper,
  Elbody,
  Eltagparg,
} from '@/lib/el/paragraph'
import MuBulb from '@/lib/ui/MuBulb'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Elbody>
      <main className='flex flex-col min-h-screen justify-between justify-items-center p-[6rem]'>
        <ElHeadBanDescription>
          <Eltagparg variant='plight'>
            Learn more about me<MuLink href='/about' className='hover:text-red-500 no-underline'>Click Here</MuLink>
          </Eltagparg>
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
    </Elbody>
  )
}
