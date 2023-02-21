import React, { useState,useEffect } from 'react'
import ThreadFind from '../Organisms/ThreadFind';
import Link from 'next/link';
import ThreadPropsType from '@/types/ThreadProps';

type ThreadCardPropsType = {
    id:number
    title:string;
}

const ThreadCard = (props:ThreadCardPropsType) => {
    const [thread,setThread] = useState<ThreadPropsType>({
        title:"",
        content:"",
        article_user:"",
        tag:[],
        group:[]
    })
    useEffect(() => {
        ThreadFind(props.title).then(res => {
          setThread(res.data.blog)
        });
    },[])
    console.log(thread)
    return (    
    <>
    <Link 
    as={`/blog/${props.id}`}
    href={{pathname:`/blog/${props.id}`,query:thread}}>
        <div>{props.title}</div>
    </Link>
    </>
    )
}  

export default ThreadCard