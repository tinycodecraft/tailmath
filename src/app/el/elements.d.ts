import { RadioProps } from "@mui/material";
import React, { PropsWithChildren  } from "react";
import internal from "stream";

export as namespace elementSps;

export interface ElementProps extends PropsWithChildren {
    colorMode: 'dimmed' | 'bright';

}

export interface ItemProps {
    key: string;
    value: string;


}
export interface AccordionItemProps {
    title: string;
    key:string;
    children: React.ReactNode | undefined | string;
}

export interface ImageItemLinkProps {
    title: string;
    url:string;
}
export interface ImageListWrapperProps {

    wrapperWidth: number;
    wrapperHeight: number;
    rowHeight: number;
    itemHeight?: number | undefined;
    itemWidth?: number | undefined;
    items: ImageItemLinkProps[];
    cols: number;

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