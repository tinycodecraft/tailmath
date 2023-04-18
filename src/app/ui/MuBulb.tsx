import * as React from 'react'
import Link from '@mui/material/Link'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import MuLink, { LinkProps } from './MuLink'
import { Box, Card, CardContent } from '@mui/material'
import { yellow } from '@mui/material/colors'
import { LightBulbIcon } from './MuIcons'




export default function MuBulb(props: LinkProps & { title: string }) {
  const { title, href, children, ...other } = props;
  const alertcolor = yellow[200];
  return (
    <Card variant='elevation' className='m-5' sx={{
      '&:hover': {
        backgroundColor: `${alertcolor}`
      }
    }}>
      <CardContent>
        <MuLink href={href} {...other} sx={{ textDecorationLine: 'none', color:'inherit' }}>
          <Typography variant='h5' sx={{ display: 'flex' }}>
            {title}
            <Typography sx={{ mt: 0, mb: 3 }} color='text.secondary'>
              <LightBulbIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            </Typography>
          </Typography>
          {children}
        </MuLink>
      </CardContent>
    </Card>
  )
}
