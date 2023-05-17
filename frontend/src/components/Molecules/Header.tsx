import AppBar from '@mui/material/AppBar'
import Toolbar from "@mui/material/Toolbar";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MultipleButton from "../Atoms/MultipleButton";
import MultipleIconButton from "../Atoms/MultipleIconButton";


const Header = () => {
  return(
    <div style={{ width:"100%" }}>
      <AppBar position="sticky" style = {{backgroundColor: "green"}}>
        <Toolbar>
          <Typography
            variant='h5'
            component = "a"
            href = "/home"
            sx = {{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily:"Segoe UI",
              fontWeight: 800,
              color: 'inherit',
            }}>
            ChatBlog
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <Box>
            <MultipleButton text="作成" variant="outlined" color="inherit" startIcon={<BorderColorIcon />} 
              handleClick={() => window.location.href='/threadwrite'}/>
            <MultipleIconButton icon={<AccountCircleIcon/>} size="large" color="inherit"
              handleClick={() => window.location.href='/id'}/>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header