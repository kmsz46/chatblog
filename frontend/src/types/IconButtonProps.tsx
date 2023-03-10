import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

type IconButtonPropsType = {
  icon?: ReactNode;
  children?: ReactNode;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  size?: "small" | "medium" | "large";
  sx?: SxProps<Theme>;
  handleClick?: () => void;
}
export default IconButtonPropsType;