import { InputAdornment, MenuItem, TextField, TextFieldProps, styled } from "@mui/material";
import { Stack,Box,Button,IconButton, ButtonGroup,ToggleButton,ToggleButtonGroup } from "@mui/material"
import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { ItemsProps,ItemProps } from "./elements";


export function MuTextFormatter(){
    const [formats, setFormats] = useState<string[]>([])
    const formatChange = (_event: React.MouseEvent<HTMLElement>, newformats:string[])=>{
        setFormats(newformats);
    }
    return (
        <Stack direction='row'>
            <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={formatChange} size='small'>
                <ToggleButton value='bold' aria-label="bold" ><FormatBoldIcon /> </ToggleButton>
                <ToggleButton value='italic' aria-label="italic" ><FormatItalicIcon /> </ToggleButton>
                <ToggleButton value='underlined' aria-label="underlined" ><FormatUnderlinedIcon /> </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    )

}

export function MuPassword(props: TextFieldProps){
    const {helperText,  ...other}=props;
    const [isvisible, setVisible] = useState<Boolean>(false);
    const toggleEye = (_event: React.MouseEvent<HTMLButtonElement>) =>{
        setVisible(!isvisible);

    }
    return (
        <TextField label="Password" type={isvisible ? "text": "password"} helperText={helperText} {...other} 
        InputProps={{
            endAdornment: <InputAdornment position="end"><IconButton onClick={toggleEye} >{isvisible ? <VisibilityIcon /> : <VisibilityOffIcon /> } </IconButton> </InputAdornment>
        }}
        >

        </TextField>
    )
}
/*
    do multiple
    SelectProps ={{
        multiple: true
    }}
    label is the display inside the select list without selection
*/
export function MuSelectList(props: ItemsProps & TextFieldProps )
{
    const { list, ...other } = props;

    return (
        <Box width='250px'>
            <TextField select fullWidth {...other}>
                {
                list.map((item: ItemProps,_)=> {
                    return <MenuItem value={item.key} key={item.key}>{item.value}</MenuItem>
                } )
                }
            </TextField>
        </Box>
    )
}