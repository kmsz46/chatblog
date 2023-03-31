import type { NextPage } from 'next';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Header from '../Molecules/Header';
import { Box } from '@mui/material';
import InputTags from '../Atoms/InputTags';
import InputTag from '../Atoms/InputTag';
import MarkdownEditor from '../Atoms/MarkdownEditor'
import MultipleButton from '../Atoms/MultipleButton';

// メインタグリスト
const maintagList = [
  '質問',
  '提案',
  'お願い',
  'お知らせ'
];

// サブタグリスト
const subtagList = [''];

// グループリスト
const groupList = [
  'B1',
  'B2',
  'B3',
  'B4',
  'M1',
  'M2',
  '安藤研',
  'SLP',
  'EPC',
];

const ThreadWriteTemplate:NextPage = () =>{
  const [selectTag, setSelectTag] = React.useState<string>('');
  const [selectSubTag, setSelectSubTag] = React.useState<string[]>([]);
  const [selectGroup, setSelectGroup] = React.useState<string[]>([]);

  // 作成ボタンを押した際の処理 
  const handleFilter = () => {
    // 仮
    console.log(selectTag, selectSubTag, selectGroup);
  };

  return (
    <>
      {/* ヘッダー */}
      <Header />

      {/* タイトル */}
      <Box sx = {{ marginTop:4, marginLeft:10 }}>
        <h1>スレッド作成</h1>
      </Box>
      
      {/* メインタグ */}
      <Box sx = {{ marginTop:4, marginLeft:10 }}>
        <Typography sx={{ mt: 2 }}>メインタグ</Typography>
        <InputTag options={maintagList} tag={selectTag} setTag={setSelectTag} placeholder={"メインタグ選択"} sx={{ m: 1, width: 470 }}/>                         
      </Box>
      
      {/* サブタグ */}
      <Box sx = {{ marginTop:4, marginLeft:10 }}>
        <Typography sx={{ mt: 2 }}>サブタグ</Typography>
        <InputTags freeSolo options={subtagList} tags={selectSubTag} setTags={setSelectSubTag} placeholder={"サブタグ入力(Enter)"} sx={{ m: 1, width: 470 }}/>
      </Box>
      
      {/* 所属グループ */}
      <Box sx = {{ marginTop:4, marginLeft:10 }}>
        <Typography sx={{ mt: 2 }}>グループ</Typography>
        <InputTags options={groupList} tags={selectGroup} setTags={setSelectGroup} placeholder={"グループ選択"} sx={{ m: 1, width: 470 }}/>  
      </Box>

      {/* 件名 */}
      <Box sx = {{ marginTop:4, marginLeft:10 }}>
        <Typography sx={{ mt: 2 }}>件名</Typography>
      </Box>

      {/* 本文 */}
      <Box sx = {{ marginTop:4, marginLeft:10 }}>
        <Typography sx={{ mt: 2 }}>本文</Typography>
        <MarkdownEditor />                         
      </Box>

      {/* 作成ボタン */}
      <Box sx = {{ display: "flex", justifyContent: "space-around" }}>
        <MultipleButton text="作成" variant="contained" handleClick={handleFilter}/>
      </Box>
    </>
  )
}

export default ThreadWriteTemplate;