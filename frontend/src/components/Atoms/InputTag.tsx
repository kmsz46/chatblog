import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { SxProps, Theme } from '@mui/material/styles';

type Props = {
  options: string[];
  tag: string;
  setTag: (value: string) => void;
  label?: string;
  placeholder?: string;
  sx?: SxProps<Theme>;
};

// タグの選択
const InputTag = (props: Props) => {
  return (
    <div>
      <Autocomplete
        id="tags-standard"
        options={props.options}
        getOptionLabel={(option) => option}
        inputValue={props.tag}
        onInputChange={(event, value) => props.setTag(value)}
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

export default InputTag;