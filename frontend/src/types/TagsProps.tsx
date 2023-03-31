import { SxProps, Theme } from '@mui/material/styles';

type TagsPropsType = {
  freeSolo?: boolean;
  options: string[];
  tags: string[];
  setTags: (value: string[]) => void;
  label?: string;
  placeholder?: string;
  sx?: SxProps<Theme>;
};

export default TagsPropsType;