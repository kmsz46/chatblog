import { useState,useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import ThreadPropsType from "@/types/ThreadProps";
import ThreadFind from '@/api/ThreadFind';
import ThreadCardPropsType from '@/types/ThreadCardProps';

const Contents = (props:ThreadCardPropsType) =>{
    const [thread,setThread] = useState<ThreadPropsType>({
        title:"",
        content:"",
        article_user:"",
        tag:"",
        group:""
    })
    useEffect(() => {
        ThreadFind(props.title).then(res => {
          setThread(res.data.blog)
        });
    },[])
    return (
        <>
        <h1>{thread.title}</h1>
        <p>{thread.article_user}</p>
        <p>{thread.tag}</p>
        <p>{thread.group}</p>
        <ReactMarkdown>{thread.content}</ReactMarkdown>
        </>
    )
}

export default Contents