import React, { useState,useEffect } from 'react'
import ThreadFind from '../../api/ThreadFind';
import Link from 'next/link';
import ThreadCardPropsType from '@/types/ThreadCardProps';


// スレッドのリンクコンポーネント
//herfのqueryによってスレッドのidをURLに渡している
const ThreadCard = (props:ThreadCardPropsType) => {
    return (    
    <>
    <Link 
    as={`/blog/${props.id}`}
    href={{pathname:`/blog/${props.id}`,query:props.id}}>
        <div>{props.title}</div>
    </Link>
    </>
    )
}  

export default ThreadCard