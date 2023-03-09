import Button from '@mui/material/Button'
import ButtonPropsType from '@/types/ButtonProps'

export const MultipleButton = (props: ButtonPropsType) => {
  return (
    <Button 
      color={props.color}
      variant={props.variant}
      size={props.size}
      startIcon={props.startIcon}
      onClick={props.handleClick}
    >
      {props.text}
    </Button>
  )
}

export default MultipleButton