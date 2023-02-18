import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import ThreadDisplay from './ThreadDisplay';
import React, { useState, useEffect } from "react";
import Axios from 'axios'


const HomeTemplate:NextPage = () => {
    const [threadtitle,setTheadTitle] = useState<string[]>([]);
    const TitleGet = () => {
      Axios.post("http://127.0.0.1:5000/display")
      .then(res => {
        setTheadTitle(res.data.blog_title)
      })
    }
    useEffect(() => {
      TitleGet();
    },[])
    return ( 
      <>
        <h1>スレッド表示</h1>
        <ThreadDisplay threadlist={threadtitle}/>
        </>
    )
}

export default HomeTemplate