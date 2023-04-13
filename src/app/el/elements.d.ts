import { PropsWithChildren  } from "react";

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
}