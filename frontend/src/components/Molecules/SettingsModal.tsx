import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MultipleButton from '../Atoms/MultipleButton';
import MultipleIconButton from '../Atoms/MultipleIconButton';
import CloseIcon from "@mui/icons-material/Close";
import InputTags from '../Atoms/InputTags';
import InputTag from '../Atoms/InputTag';

// modalのスタイル
const styles = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

// 表示設定用モーダルコンポ―ネント
const SettingsModal = () => {
  const [selectTag, setSelectTag] = React.useState<string>('');
  const [selectGroup, setSelectGroup] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState(false);
 
  //  モーダルを開く
  const handleOpen = () => setOpen(true);
  
  // モーダルを閉じる
  const handleClose = (
    event: {}, 
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
      setOpen(false);
    }
  };

  // 決定ボタンを押した際の処理 
  const handleFilter = () => {
    // 仮
    console.log(selectTag, selectGroup);
    setOpen(false);
  };

  const maintagList = [
    '質問',
    '提案',
    'お願い',
    'お知らせ'
  ];

  // 仮のグループリスト
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

  return (
    <div>
      {/* 表示設定用ボタン */}
      <MultipleButton text="表示設定" variant="outlined" handleClick={handleOpen}/>
      
      {/* モーダル */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Box sx = {{ borderBottom:1, display:"flex", justifyContent:"space-around"}}>
            {/* タイトル */}
            <Typography variant="h6" component="h2">
              表示設定
            </Typography>

            {/* 閉じるアイコンボタン */}
            <div style={{ flexGrow: 1 }}></div>
            <MultipleIconButton icon={<CloseIcon />} sx = {{ marginBottom:1 }} handleClick={() => setOpen(false)}/>
          </Box>

          {/* メインタグ */}
          <Typography sx={{ mt: 2 }}>タグ</Typography>
          <InputTag options={maintagList} tag={selectTag} setTag={setSelectTag} placeholder={"メインタグ選択"} sx={{ m: 1, width: 470 }}/>                         
          
          {/* 所属グループ */}
          <Typography sx={{ mt: 2 }}>グループ</Typography>
          <InputTags options={groupList} tags={selectGroup} setTags={setSelectGroup} placeholder={"グループ選択"} sx={{ m: 1, width: 470 }}/>  
          
          {/* 決定ボタン */}
          <Box sx = {{marginTop:2, display: "flex", justifyContent: "space-around" }}>
            <MultipleButton text="決定" variant="contained" handleClick={handleFilter}/>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SettingsModal;