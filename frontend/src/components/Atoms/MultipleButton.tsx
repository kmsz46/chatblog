import Button from '@mui/material/Button'
import ButtonPropsType from '@/types/ButtonProps'

// ボタンコンポーネント
// 使用例
// <MultipleButton text="編集" variant="outlined"/>
// <MultipleButton variant="outlined">編集</MultipleButton>
export const MultipleButton = (props: ButtonPropsType) => {
  return (
    <Button 
      color={props.color}
      variant={props.variant}
      size={props.size}
      startIcon={props.startIcon}
      sx={props.sx}
      onClick={props.handleClick}
    >
      {props.text}
      {props.children}
    </Button>
  )
}

export default MultipleButton