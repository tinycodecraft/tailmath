import { PropsWithChildren  } from "react";

export as namespace elementSps;

export interface ElementProps extends PropsWithChildren {
    colorMode: 'dimmed' | 'bright';

}