import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

const getStyles = (item: string, items: readonly string[], theme: Theme) => {
  return {
    fontWeight:
      items.indexOf(item) === -1
      ? theme.typography.fontWeightRegular
      : theme.typography.fontWeightMedium,
  };
};
 
type Props = {
  options: string[]
  selected: string[],
  setSelected: (value: string[]) => void
};

const MultipleSelectBox = (props: Props) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof props.selected>) => {
    const {
      target: { value },
    } = event;
    props.setSelected(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const chipDelete = (name: string) => {
    props.setSelected(props.selected.filter(value => value !== name))
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 470 }}>
        <InputLabel id="demo-multiple-chip-label">選択</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={props.selected}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="選択" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                key={value} label={value} 
                onDelete={() => chipDelete(value)}
                onMouseDown={(event) => { event.stopPropagation(); }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.options.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(item, props.selected, theme)}
            >
            {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelectBox;