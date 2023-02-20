import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import ThreadDisplay from '../Organisms/ThreadDisplay';
import React, { useState, useEffect } from "react";
import Axios from 'axios'
import TitleGet from '../Organisms/TitleGet';

const HomeTemplate:NextPage = () => {
    const [threadtitle,setThreadTitle] = useState<string[]>([]);

    useEffect(() => {
      setThreadTitle(TitleGet());
    },[])

    return ( 
      <>
        <h1>スレッド表示</h1>
        <ThreadDisplay threadlist={threadtitle}/>
        </>
    )
}

export default HomeTemplate