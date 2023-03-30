'use client'
import './globals.css'
import { Global,css } from '@emotion/react'
import { MuTheme } from './ui/themes'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Elbody } from './el/paragraph'
import localFont from 'next/font/local'


const novaMono = localFont({
  src: './assets/nova_mono/nova-mono-v18-latin-regular.ttf',
  variable: '--font-machine',
})

const techMono = localFont({
  src: './assets/share_tech_mono/share-tech-mono-v15-latin-regular.ttf',
  variable: '--font-tech'

})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <ThemeProvider theme={MuTheme}>
      <CssBaseline />
        <Global styles={css`
            :root {
              --font-machine: ${novaMono.style.fontFamily};
              --font-tech: ${techMono.style.fontFamily};
              --max-width: calc(100vw - 10px);
              --border-radius: 12px;
              --grey-shadow: 0px 2px 8px -1px #0000001a;
            }          
        `} />

        <Elbody>{children}</Elbody>
        
      </ThemeProvider>
    </html>
  )
}
