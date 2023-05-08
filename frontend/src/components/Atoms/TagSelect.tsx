import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState  } from "react";
import TagPropsType from '@/types/TagProps';

// スレッド作成時のタグを選択する
const TagSelect = (props:TagPropsType) => {
  const option = ["質問","提案","依頼","お知らせ"]
  // 表示用のsetTagと親コンポーネントに渡すprops.setTagを用意している 
  const handleChange = (event: SelectChangeEvent) => {
    props.setTag(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tag</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.tag}
          label="Tag"
          onChange={handleChange}
        >{
            option.map((op) => {
                return(
                    <MenuItem value={op}>{op}</MenuItem>
                )
            })
        }
        </Select>
      </FormControl>
    </Box>
  );
}
export default TagSelect