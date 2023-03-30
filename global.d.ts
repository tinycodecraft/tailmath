import "@mui/material/styles";

import { Theme } from "@mui/material/styles";


import {
    Palette as MuiPallete,
    PaletteOptions as MuiPaletteOptions,
  } from '@mui/material/styles/createPalette';
  
  declare module '@mui/material/styles/createPalette' {
    interface Palette extends MuiPallete {
      sunShade: { frontColor: string, bgStartColor: string, bgEndColor: string };
      dimShade: { frontColor: string, bgStartColor: string, bgEndColor: string };
      sunGlow: { primaryGlow: string, secondaryGlow: string };
      dimGlow: { primaryGlow: string, secondaryGlow: string };
    }
  
    interface PaletteOptions extends MuiPaletteOptions {
      sunShade?:  { frontColor: string, bgStartColor: string, bgEndColor: string };
      dimShade: { frontColor: string, bgStartColor: string, bgEndColor: string };
      sunGlow: { primaryGlow: string, secondaryGlow: string };
      dimGlow: { primaryGlow: string, secondaryGlow: string };
    }
  }

  declare module "@mui/styles" {
    
    interface DefaultTheme extends Theme {}
  }
declare module '@mui/material/styles'{
    export interface Theme {
        status?: {
            danger:string
        }
    }
    export interface ThemeOptions {
        status?: {
            danger: React.CSSProperties['color']
        }
    }

    

    export interface TypographyVariants {
        plight: React.CSSProperties;
        pdark: React.CSSProperties;
      }
    
      // allow configuration using `createTheme`
      export interface TypographyVariantsOptions {
        plight?: React.CSSProperties;
        pdark?: React.CSSProperties;
      }    
}


// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
      plight: true;
      pdark: true;
    }
  }

  