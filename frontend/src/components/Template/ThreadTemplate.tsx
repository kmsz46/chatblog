import type { NextPage } from 'next'
import {useState,useEffect} from 'react'
import Axios from 'axios'
import ReactMarkdown from 'react-markdown';


type ThreadPropsType = {
    title:"";
    context:"";
    tag:Array<string>;
    group:Array<string>;
}
const ThreadTemplate:NextPage<ThreadPropsType> = ({title,context,tag,group}:ThreadPropsType) =>{
    return (
        <>
        <h1>{title}</h1>
        <ReactMarkdown>{context}</ReactMarkdown>
        </>
    )
}

export default ThreadTemplate