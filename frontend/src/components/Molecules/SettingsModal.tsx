import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MultipleSelectBox from '../Atoms/MultipleSelectBox'
import CloseButton from '../Atoms/CloseButton'
import FilterButton from '../Atoms/FilterButton';
import DisplaySettingButton from '../Atoms/DisplaySettingButton';

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

const SettingsModal = () => {
  const [selectTag, setSelectTag] = React.useState<string[]>([]);
  const [selectGroup, setSelectGroup] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (
    event: {}, 
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
      setOpen(false);
    }
  };

  const tagList = [
    'c',
    'c++',
    'java',
    'python',
    'go',
    'vue',
    'react',
  ];

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
      <DisplaySettingButton handleClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Box sx = {{ borderBottom:1, display:"flex", justifyContent:"space-around"}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              表示設定
            </Typography>
            <div style={{ flexGrow: 1 }}></div>
            <Box sx = {{ marginBottom:1 }}>
              <CloseButton handleClick={() => setOpen(false)}/> 
            </Box>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>タグ</Typography>
          <MultipleSelectBox options={tagList} selected={selectTag} setSelected={setSelectTag} />                         
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>グループ</Typography>
          <MultipleSelectBox options={groupList} selected={selectGroup} setSelected={setSelectGroup} />
          <Box sx = {{marginTop:2, display: "flex", justifyContent: "space-around" }}>
            <FilterButton />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SettingsModal;