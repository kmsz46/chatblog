import type { NextPage } from 'next'
import ThreadDisplay from '../Organisms/ThreadDisplay';
import React, { useState, useEffect } from "react";
import TitleGet from '../../api/TitleGet';
import ThreadCardPropsType from '@/types/ThreadCardProps';

const HomeTemplate:NextPage = () => {
    const [threadtitle,setThreadTitle] = useState<ThreadCardPropsType[]>([]);

    useEffect (() => {
      TitleGet().then((res => {
        setThreadTitle(res.data.blog_list)
      }))
    },[])
    console.log(threadtitle)
    return ( 
      <>
        <h1>スレッド表示</h1>
        <ThreadDisplay threadlist={threadtitle}/>
        </>
    )
}

export default HomeTemplate