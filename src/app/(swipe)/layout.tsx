import React from "react";
import HeadBar from "./headbar";
import Head from "./head";

export default function SwipeLayout({children}: {children: React.ReactNode}){
    return (
        <>
        <Head></Head>
        <HeadBar></HeadBar>
        {children}
        </>
    )
}