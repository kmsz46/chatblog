import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import Axios from 'axios'
import ThreadDisplay from './ThreadDisplay';

type UserDataType = {
    name:string;
    group:string[];
}
const UserPageTemplate:NextPage = () =>{
    const router = useRouter(); 
    const [userdata,setUser] = useState<UserDataType>({
        name:"",
        group:[]
    });
    const [threadtitle,setTheadTitle] = useState<string[]>([]);
    const TitleGet = () => {
      Axios.post("http://127.0.0.1:5000/user")
      .then(res => {
        setUser(res.data.user_info)
        setTheadTitle(res.data.blog_info)
    })
    }
    useEffect(() => {
      TitleGet();
    },[])
    return (
        <>
        <h1>ユーザ情報</h1>
        <p>{userdata.name}</p>
        <p>{userdata.group}</p>
        <ThreadDisplay threadlist={threadtitle}/>
        </>
    )
}

export default UserPageTemplate