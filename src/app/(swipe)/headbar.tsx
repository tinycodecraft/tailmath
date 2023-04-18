'use client'
import React from 'react'
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { MuCartIcon } from '../ui/MuIcons'

const links = [
  { href: '/about', label: 'About me' },
  { href: '/contact', label: 'Contact me' },
  { href: '/workshop', label: 'My Workshop' },
  { href: '/showroom', label: 'My Showroom' },
  { href: '/products', label: 'My Products' },
]

export default function HeadBar() {
  const path = usePathname()
  return (
    <AppBar position='static' className='bg-carthome-beige' >
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemon className='text-carthome-black' />
        </IconButton>
        <Typography variant='h6' component='div' className='text-3xl font-bold text-carthome-black'>
          Raymo Office
        </Typography>
        <ul className='[&_li]:ml-4 ml-12 flex'>
          {links.map((link) => (
            <li key={link.href}>
              <Link className='relative text-carthome-black' href={link.href}>
                {link.href === path && (
                  <motion.span
                    layoutId='underline'
                    className='absolute left-0 top-full block h-[1px] w-full bg-black'
                  />
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="ml-auto flex flex-row bg-carthome-beige">
          <MuCartIcon className="w-6 h-7 bg-carthome-beige text-carthome-black" />
          <span className="sr-only">Open cart</span>
          <span className="ml-2 flex mt-1 h-5 w-5 pt-1 items-center justify-center rounded-full bg-red-400 text-carthome-black">
            1
          </span>
          <span className="sr-only">items in cart cart</span>
        </button>        
      </Toolbar>
    </AppBar>
  )
}
