import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import TagsPropsType from '@/types/TagsProps';

// 複数タグの選択
const InputTags = (props: TagsPropsType) => {
  return (
    <div>
      <Autocomplete
        multiple
        id="tags-filled"
        freeSolo={props.freeSolo}
        options={props.options}
        getOptionLabel={(option) => option}
        value={props.tags}
        onChange={(event, value) => props.setTags(value)}
        renderTags={(value: readonly string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.label}
            placeholder={props.placeholder}
          />
        )}
        sx={props.sx}
      />
    </div>
  );
};

export default InputTags;