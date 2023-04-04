import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export const PasswordTextBox = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-password-input" label="パスワード" type="password" autoComplete="current-password"/>
    </Box>
  )
}

export default PasswordTextBox