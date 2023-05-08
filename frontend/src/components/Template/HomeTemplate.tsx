import type { NextPage } from 'next'
import ThreadDisplay from '../Organisms/ThreadDisplay';
import React, { useState, useEffect } from "react";
import TitleGet from '../../api/TitleGet';
import ThreadCardPropsType from '@/types/ThreadCardProps';
import Header from '../Molecules/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SettingsModal from '../Molecules/SettingsModal';

// スレッド表示コンポーネント
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
      {/* ヘッダー */}
      <Header />

      {/* タイトル */}
      <Box sx = {{ marginTop:8, marginLeft:30}}>
        <Typography variant="h4" component="h2">
          スレッド表示
        </Typography>
      </Box>

      {/* 表示設定ボタン */}
      <Box sx = {{ display:"flex", justifyContent:"flex-end"}}>
        <div style={{ flexGrow: 1 }}></div>
        <Box sx = {{ marginTop:4, marginRight:25}}>
          <SettingsModal/>
        </Box>
      </Box>

      {/* スレッド一覧表示 */}
      <Box sx = {{marginTop:2, display: "flex", justifyContent: "space-around" }}>
        <ThreadDisplay threadlist={threadtitle}/>
      </Box>
    </>
  )
}

export default HomeTemplate