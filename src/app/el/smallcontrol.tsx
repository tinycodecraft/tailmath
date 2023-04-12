import { InputAdornment, TextField, TextFieldProps, styled } from "@mui/material";
import { Stack,Button,IconButton, ButtonGroup,ToggleButton,ToggleButtonGroup } from "@mui/material"
import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import VisibilityIcon from "@mui/icons-material/Visibility"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"


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