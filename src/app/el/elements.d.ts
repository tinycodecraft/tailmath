import { RadioProps } from "@mui/material";
import React, { PropsWithChildren  } from "react";

export as namespace elementSps;

export interface ElementProps extends PropsWithChildren {
    colorMode: 'dimmed' | 'bright';

}

export interface ItemProps {
    key: string;
    value: string;


}

export interface ItemsProps {
    list: ItemProps[];
    listChange?: React.ChangeEventHandler<HTMLInputElement>;
    
}
export interface ValueChangeProps{
    valueChange: (event:React.SyntheticEvent,value:string|null) => void;
}

export interface LabelItemProps {
    prompt: string;
    label: string;
    

}