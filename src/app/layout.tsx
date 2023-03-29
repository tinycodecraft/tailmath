'use client'
import './globals.css'
import Head from 'next/head'
import { MuTheme } from './ui/themes'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Elbody } from './el/paragraph'
import localFont from 'next/font/local'


const novaMono = localFont({
  src: './assets/nova_mono/nova-mono-v18-latin-regular.ttf',
  variable: '--font-machine',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <ThemeProvider theme={MuTheme}>
        <>
          <style jsx global>{`
            :root {
              --font-machine: ${novaMono.style.fontFamily};
            }
          `}</style>
        </>
        <CssBaseline />

        <Elbody>{children}</Elbody>
      </ThemeProvider>
    </html>
  )
}
