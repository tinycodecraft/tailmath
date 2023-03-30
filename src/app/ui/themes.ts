import { createTheme } from '@mui/material/styles'


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

    

  },
})

export { MuTheme }
