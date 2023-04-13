import { Autocomplete, Checkbox, FormControl, FormControlLabel, FormGroup, FormGroupProps, FormLabel, InputAdornment, MenuItem, Radio, RadioGroup, RadioGroupProps, TextField, TextFieldProps, styled } from "@mui/material";
import { Stack,Box,Button,IconButton, ButtonGroup,ToggleButton,ToggleButtonGroup } from "@mui/material"
import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { ItemsProps,ItemProps, LabelItemProps, ValueChangeProps } from "./elements";


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

export function MuRadioList(props: ItemsProps & RadioGroupProps & LabelItemProps){
    const {prompt,label,list, ...other} = props;

    return (
        <Box>
            <FormControl>
                <FormLabel id={`${label}-form`}>
                    {prompt}
                </FormLabel>
                <RadioGroup
                    name={label}
                    // eslint-disable-next-line jsx-a11y/aria-props
                    aria-aria-labelledby={`${label}-form`}
                    {...other}
                    
                    >
                        {
                        list.map((item: ItemProps,_)=>{
                            return <FormControlLabel key={item.key}  control={<Radio />} label={item.value} value={item.key} />
                            
                        })

                        }

                    </RadioGroup>                
            </FormControl>
        </Box>
    )
}

export function MuCheckList(props: ItemsProps & FormGroupProps & LabelItemProps )
{
    const { listChange, prompt,label,list,...other}=props;
    const keys = list.map((item)=> item.key);
    const [checkValues,setCheckValues]=useState<string[]>([])
    const changeValue = (event:React.ChangeEvent<HTMLInputElement> )=> {
        const index = checkValues.indexOf(event.target.value);
        console.log(index);
        console.log(event.target.value);
        if(index===-1){
            setCheckValues([...checkValues,event.target.value])
        }
        else{
           setCheckValues( checkValues.filter((v)=> v!==event.target.value))
        }
        if(listChange!==undefined)
        {
            listChange(event);
        }
    }
    return (
        <Box>
            <FormControl>
                <FormLabel>{prompt}</FormLabel>
                <FormGroup {...other}>
                {
                    list.map((item:ItemProps,_)=>{
                        return <FormControlLabel key={item.key} label={item.value}  control={<Checkbox checked={checkValues.includes(item.key)} value={item.key} onChange={changeValue} />} />
                    })
                }
                </FormGroup>


            </FormControl>
        </Box>

    )
}
/*
   AutoComplete attribute freeSolo if value entered freely
   AutoComplete attribute options allow list of other object type
   such that TextField value will be changed to value of that object type
*/
export function MuAutoCompleteList(props:{ items: string[], label: string} & ValueChangeProps){
    const { items,label,valueChange} = props;
    const [value, setValue] =useState<string|null>(null)
    const myChange = (event:any,newValue:string|null)=>{
        setValue(newValue);
        if(valueChange!==undefined){
            valueChange(event,newValue);
        }

    }
    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
            options={items}
            renderInput={(params)=> <TextField {...params} label={label} value={value} />}
            onChange={myChange}

            />
        </Stack>
    )


}