import {styled} from '@mui/material/styles'
import { Typography } from '@mui/material';


const ElHeadBanDescription = styled("div")`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-tech);  
`;



const ElCenterGlowSvg = styled("div")(({theme})=> ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '4rem 0',
  
  
  '&::before': {
    borderRadius: '50%',
    background: `${theme.palette.mode == "light" ? theme.palette.sunGlow.secondaryGlow: theme.palette.dimGlow.secondaryGlow}`,    
    //width: '480px',
     height: '360px',
    // marginLeft: '-400px',

  },
  '&::after': {
    background: `${theme.palette.mode == "light" ? theme.palette.sunGlow.primaryGlow: theme.palette.dimGlow.primaryGlow}`,
    zIndex: -1,
    //Please match the after svg size
    width: '240px',
    height: '180px',

  },
  '&::before, &::after': {
    content: '""',
    left: '50%',
    position: 'absolute',
    filter: 'blur(45px)',
    transform:'translateZ(0)',    

  }


}));

const ElShadowSvg=styled(Typography,{
  // Configure which props should be forwarded on DOM
 shouldForwardProp: (prop) =>  true //prop !== 'dark' && prop!== 'border' 
 })

 (({ variant, theme }) => ({
  transform: 'translateZ(0)',
  borderRadius: 'var(--border-radius)',
  overflow: 'hidden',
  boxShadow: 'var(--grey-shadow)',
  '&::before, &::after' : {
    content: '""',
    position: 'absolute',
    zIndex: -1
  },
  '&::before': {
    animation: '6s rotate linear infinite',
    width: '200%',
    height: '200%',
    background: 'var(--tile-border)'

  },
  
  '&::after': {
    inset: 0,
    padding: '1px',
    borderRadius: 'var(--border-radius)',     
    background: `linear-gradient(
      to bottom right,
      ${theme.palette.mode == "light"? theme.palette.sunTile.startColor : theme.palette.dimTile.startColor},
      ${theme.palette.mode == "light"? theme.palette.sunTile.endColor : theme.palette.dimTile.endColor}
    )`,
    backgroundClip: 'content-box', 
  }

 }));


const ElThreeCellWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(33%, auto));
  width: 100%;
  max-width: var(--max-width);
`;

const Elbody = styled("body")`  
    max-width: 100vw;
    overflow-x: hidden;

    color: ${({theme})=> theme.palette.mode == "light" ?  theme.palette.sunShade.frontColor : theme.palette.dimShade.frontColor};
    background: linear-gradient(
      to bottom,
      transparent,
      ${({theme})=> theme.palette.mode == "light" ? theme.palette.sunShade.bgEndColor: theme.palette.dimShade.bgEndColor}
    )
    ${({theme})=> theme.palette.mode == "light" ? theme.palette.sunShade.bgStartColor: theme.palette.dimShade.bgStartColor};    

`;

const ElCode = styled("code")`
  font-weight: 700;
  font-family: var(--font-machine);
`;



const Eltagparg = styled(Typography,{
    // Configure which props should be forwarded on DOM
   shouldForwardProp: (prop) =>  true //prop !== 'dark' && prop!== 'border' 
   })
 
   (({ variant, theme }) => ({
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: 'var(--border-radius)',
    position: 'relative',
    margin: 0,
    padding: '1rem',

//    backgroundColor: dark? theme.palette.grey[900] : theme.palette.grey[100],
//    color: dark? theme.palette.grey[100] : theme.palette.grey[900],
//    border: border? `1rem solid ${theme.palette.primary.main}` : 'none'
 
   }));

   




export  { Elbody,Eltagparg,ElCode, ElHeadBanDescription, ElThreeCellWrapper,ElCenterGlowSvg ,ElShadowSvg}