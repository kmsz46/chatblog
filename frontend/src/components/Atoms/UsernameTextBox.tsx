import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export const UsernameTextBox = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ><TextField id="outlined-basic" label="ユーザ名" variant="outlined" /></Box>
  )
}

export default UsernameTextBox