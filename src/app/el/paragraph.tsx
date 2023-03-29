import {styled} from '@mui/material/styles'
import { Typography,Stack } from '@mui/material';

const ElCode = styled("code")`
  font-weight: 700;
  font-family: var(--font-machine);
`;

// const ElWholeColumn=styled(Stack,{
//     shouldForwardProp: (prop)=> true
// })
// (({theme})=> ({

// }));

// ElWholeColumn.defaultProps ={
//     minHeight: '100vh',
//     direction: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center'
// }

const Eltagparg = styled(Typography,{
    // Configure which props should be forwarded on DOM
   shouldForwardProp: (prop) =>  true //prop !== 'dark' && prop!== 'border' 
   })
 
   (({ variant, theme }) => ({
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '12px'
//    backgroundColor: dark? theme.palette.grey[900] : theme.palette.grey[100],
//    color: dark? theme.palette.grey[100] : theme.palette.grey[900],
//    border: border? `1rem solid ${theme.palette.primary.main}` : 'none'
 
   }));

   

const Elbody = styled("body")`  
    
    color: ${({theme})=> theme.palette.mode == "light" ?  theme.palette.sunShade.frontColor : theme.palette.dimShade.frontColor};
    background: linear-gradient(
      to bottom,
      transparent,
      ${({theme})=> theme.palette.mode == "light" ? theme.palette.sunShade.bgEndColor: theme.palette.dimShade.bgEndColor}
    )
    ${({theme})=> theme.palette.mode == "light" ? theme.palette.sunShade.bgStartColor: theme.palette.dimShade.bgStartColor};    

`;


export  { Elbody,Eltagparg,ElCode }