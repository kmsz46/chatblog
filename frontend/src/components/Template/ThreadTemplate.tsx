import type { NextPage } from 'next'
import {useState,useEffect} from 'react'
import ReactMarkdown from 'react-markdown';


type ThreadPropsType = {
    title:string;
    content:string;
    article_user:string;
    tag:Array<string>;
    group:Array<string>;
}
const ThreadTemplate:NextPage<ThreadPropsType> = ({title,content,article_user,tag,group}:ThreadPropsType) =>{
    return (
        <>
        <h1>{title}</h1>
        <p>{article_user}</p>
        <p>{tag}</p>
        <p>{group}</p>
        <ReactMarkdown>{content}</ReactMarkdown>
        </>
    )
}

export default ThreadTemplate