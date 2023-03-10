import IconButton from '@mui/material/IconButton'
import IconButtonPropsType from '@/types/IconButtonProps'

// アイコンボタンコンポーネント
// 使用例
// <MultipleIconButton icon={<AccountCircleIcon />} size="large" />
// <MultipleIconButton size="large">{<AccountCircleIcon />}</MultipleIconButton>
export const MultipleIconButton = (props: IconButtonPropsType) => {
  return (
    <IconButton 
      color={props.color}
      size={props.size}
      sx={props.sx}
      onClick={props.handleClick}
    >
      {props.icon}
      {props.children}
    </IconButton>
  )
}

export default MultipleIconButton