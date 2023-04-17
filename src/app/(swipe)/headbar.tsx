'use client'
import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'
export default function HeadBar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
        <CatchingPokemon />
        </IconButton>
        <Typography variant='h6' component='div'>
            SWIPE Here
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
