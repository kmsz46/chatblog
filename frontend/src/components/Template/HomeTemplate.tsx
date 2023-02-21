import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import ThreadDisplay from '../Organisms/ThreadDisplay';
import React, { useState, useEffect } from "react";
import TitleGet from '../../api/TitleGet';

const HomeTemplate:NextPage = () => {
    const [threadtitle,setThreadTitle] = useState<string[]>([]);

    useEffect (() => {
      TitleGet().then((res => {
        setThreadTitle(res.data.blog_title)
      }))
    },[])
    // console.log(threadtitle)
    return ( 
      <>
        <h1>スレッド表示</h1>
        <ThreadDisplay threadlist={threadtitle}/>
        </>
    )
}

export default HomeTemplate