import IconButton from '@mui/material/IconButton'
import IconButtonPropsType from '@/types/IconButtonProps'

export const MultipleIconButton = (props: IconButtonPropsType) => {
  return (
    <IconButton 
      color={props.color}
      size={props.size}
      onClick={props.handleClick}
    >
      {props.icon}
    </IconButton>
  )
}

export default MultipleIconButton