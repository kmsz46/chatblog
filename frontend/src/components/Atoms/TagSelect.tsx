import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type TagPropsType = {
    setTag:React.Dispatch<React.SetStateAction<string>>;
}

const TagSelect = (props:TagPropsType) => {
  const option = ["質問","提案","お願い","お知らせ"]
  const [tag, setTage] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    props.setTag(event.target.value as string);
    setTage(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tag</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tag}
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