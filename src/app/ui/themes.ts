import { createTheme } from '@mui/material/styles'

const MuCartTheme=createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'var(--carthome-beige)'
        }
      }
    }
  }
})

const MuTheme = createTheme({
  
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },

    // MuiCssBaseline:{
    //   styleOverrides:`
    //     @font-face {
    //       font-family: var(--font-machine);
    //     }

    //   `
    // },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          plight: 'p',
          pdark: 'p',
          blocksquare: 'div',
        },
      },
    },
  },
  palette: {
    
    sunShade: {
      frontColor: 'rgb(0, 0, 0)',
      bgStartColor: 'rgb(214, 219, 220)',
      bgEndColor: 'rgb(255, 255, 255)',
    },
    dimShade: {
      frontColor: 'rgb(255, 255, 255)',
      bgStartColor: 'rgb(0,0,0)',
      bgEndColor: 'rgb(0,0,0)',
    },
    sunGlow: {
      primaryGlow: `conic-gradient(
        from 180deg at 50% 50%,
        #16abff33 0deg,
        #0885ff33 55deg,
        #54d6ff33 120deg,
        #0071ff33 160deg,
        transparent 360deg
      )`,
      secondaryGlow: `radial-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      )
      `

    },
    dimGlow: {
      primaryGlow: `radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0))`,
      secondaryGlow: `linear-gradient(
        to bottom right,
        rgba(1, 65, 255, 0),
        rgba(1, 65, 255, 0),
        rgba(1, 65, 255, 0.3)
      )`,
    },
    sunTile: {
      startColor: `rgba(239, 245, 249,1)`,
      endColor: `rgba(228, 232, 233,1)`,
      borderColor: `conic-gradient(
        #00000080,
        #00000040,
        #00000030,
        #00000020,
        #00000010,
        #00000010,
        #00000080
      )`
    },
    dimTile: {
      startColor: `rgba(2,13,46,1)`,
      endColor: `rgba(2,5,19,1)`,
      borderColor: `conic-gradient(
        #ffffff80,
        #ffffff40,
        #ffffff30,
        #ffffff20,
        #ffffff10,
        #ffffff10,
        #ffffff80
      )`

    }

  },
 
  typography: {

    
    pdark: {
      
      backgroundColor: 'rgba(20, 20, 20,0.5)',      
      borderColor: 'rgba(172, 175, 176, 0.3)',
    },
    plight: {
      backgroundColor: 'rgba(238, 240, 241,0.5)',      
      borderColor: 'rgba(108, 108, 108, 0.3)',
    },

    blocksquare: {
      width: '75px',
      height: '75px',
      padding: '15px 10px',
      marginLeft: '16px',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      position: 'relative'

    }
    

  },
})

export { MuTheme,MuCartTheme }
