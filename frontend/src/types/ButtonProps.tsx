import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

type ButtonPropsType = {
  text?: string;
  children?: ReactNode;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  sx?: SxProps<Theme>;
  handleClick: (e:any) => void;
}
export default ButtonPropsType;