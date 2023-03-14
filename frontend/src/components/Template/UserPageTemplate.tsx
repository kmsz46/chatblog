import type { NextPage } from 'next'
import React, { useState, useEffect } from "react";
import Header from '../Molecules/Header';
import UserGroupDisplay from '../Atoms/UserGroupDisplay';
import UserNameDisplay from '../Atoms/UserNameDisplay';
import ThreadDisplay from '../Organisms/ThreadDisplay';
import UserDataType from '@/types/UserData';
import UserGet from '../../api/UserGet';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ユーザ情報表示コンポーネント
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
      {/* ヘッダー */}
      <Header />
      
      {/* タイトル */}
      <Box sx = {{ marginTop:8, marginLeft:20}}>
        <Typography variant="h4" component="h2">
          ユーザ情報
        </Typography>
      </Box>
      
      {/* ユーザの名前 */}
      <Box sx = {{ marginTop:4, marginLeft:20}}>
        <UserNameDisplay name={userdata.name} />
      </Box>
      
      {/* 所属グループ */}
      <Box sx = {{ marginTop:4, marginLeft:20}}>
        <UserGroupDisplay group={userdata.group} />
      </Box>

      {/* スレッド一覧表示 */}
      <Box sx = {{marginTop:2, display: "flex", justifyContent: "space-around" }}>
        <ThreadDisplay threadlist={threadtitle}/>
      </Box>
    </>
  )
}

export default UserPageTemplate