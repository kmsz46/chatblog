import TextField from '@mui/material/TextField'
import { SxProps, Theme } from '@mui/material/styles';

type Props = {
  id?: string;
  label?: string;
  text: string;
  setText: (value: string) => void;
  variant?: 'filled' | 'outlined' | 'standard';
  placeholder?: string;
  sx?: SxProps<Theme>;
};

// テキストの入力
export const UsernameTextBox = (props: Props) => {
  return (
    <>
      <TextField 
        id={props.id}
        label={props.label}
        value={props.text}
        onChange={(event) => props.setText(event.target.value)}
        variant={props.variant}
        placeholder={props.placeholder}
        sx={props.sx} 
      />
    </>
  )
}

export default UsernameTextBox;