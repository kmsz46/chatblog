import {ReactNode} from 'react';

type IconButtonPropsType = {
  icon: ReactNode;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  size?: "small" | "medium" | "large";
  handleClick?: () => void;
}
export default IconButtonPropsType;