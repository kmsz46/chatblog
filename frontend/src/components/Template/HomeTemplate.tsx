import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import ThreadDisplay from './ThreadDisplay';
import React, { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";


const HomeTemplate:NextPage = () => {
    const [threadtitle,setTheadTitle] = useState<string[]>([]);
    const options: AxiosRequestConfig = {
        url: "/users",
        method: "POST",
      };
    const TitleGet = () => {
        useEffect(() => {
            axios(options)
              .then((res:AxiosResponse<string[]>) => {
                const { data, status } = res;
                setTheadTitle(data);
              })
              .catch((e: AxiosError<{ error: string }>) => {
                // エラー処理
                console.log(e.message);
              });
            }, []);
    }
    return ( 
      <>
        <h1>スレッド表示</h1>
        <ThreadDisplay threadlist={threadtitle}/>
        </>
    )
}

export default HomeTemplate