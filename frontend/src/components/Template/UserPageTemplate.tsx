import type { NextPage } from 'next'
import React, { useState, useEffect } from "react";
import ThreadDisplay from '../Organisms/ThreadDisplay';
import UserDataType from '@/types/UserData';
import UserGet from '../Organisms/UserGet';


const UserPageTemplate:NextPage = () => {
    const [userdata,setUser] = useState<UserDataType>({
        name:"",
        group:[]
    });
    const [threadtitle,setTheadTitle] = useState<string[]>([]);
    useEffect(() => {
      UserGet().then(res => {
        setUser(res.data.user_info)
        setTheadTitle(res.data.blog_info)
      });
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