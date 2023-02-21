import React, { useState,useEffect } from 'react'
import ThreadFind from '../../api/ThreadFind';
import Link from 'next/link';
import ThreadPropsType from '@/types/ThreadProps';
import ThreadCardPropsType from '@/types/ThreadCardProps';

const ThreadCard = (props:ThreadCardPropsType) => {
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
    // console.log(thread)
    return (    
    <>
    <Link 
    as={`/blog/${props.title}`}
    href={{pathname:`/blog/${props.title}`,query:thread.title}}>
        <div>{props.title}</div>
    </Link>
    </>
    )
}  

export default ThreadCard