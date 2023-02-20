import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import Axios from 'axios'
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
      const data = UserGet();
      setUser(data.user)
      setTheadTitle(data.title)
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