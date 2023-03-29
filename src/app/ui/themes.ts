import { createTheme } from '@mui/material/styles'

const MuTheme = createTheme({
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },

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
