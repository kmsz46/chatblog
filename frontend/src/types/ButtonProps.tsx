import {ReactNode} from 'react';

type ButtonPropsType = {
  text: string;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  startIcon?: ReactNode;
  handleClick?: () => void;
}
export default ButtonPropsType;