import { styled } from "@mui/material";
import { Stack,Button,IconButton, ButtonGroup,ToggleButton,ToggleButtonGroup } from "@mui/material"
import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"

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

