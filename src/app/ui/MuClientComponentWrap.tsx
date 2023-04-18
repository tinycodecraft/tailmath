'use client'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { MuCartTheme } from './themes'


export const MuCartThemeProvider = ({children}: {children: React.ReactNode }) => {
  return (
    <>
    <ThemeProvider theme={MuCartTheme}>{children}</ThemeProvider>
    </>

  )
}
