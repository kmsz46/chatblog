import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState  } from "react";
import TagPropsType from '@/types/TagProps';


const TagSelect = (props:TagPropsType) => {
  const option = ["質問","提案","お願い","お知らせ"]
  const [tag, setTag] = useState<string>('');
  const handleChange = (event: SelectChangeEvent) => {
    props.setTag(event.target.value as string);
    setTag(event.target.value as string);
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