'use client'
import './globals.css'
import Head from 'next/head'
import { MuTheme } from './ui/themes'
import { ThemeProvider,CssBaseline } from '@mui/material'
import { Elbody } from './el/paragraph'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={MuTheme}>
        <CssBaseline />

      <Elbody>{children}</Elbody>
      </ThemeProvider>
      
    </html>
  )
}
