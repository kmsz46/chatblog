import AccountButton from "../Atoms/AccountButton";
import MakeThreadButton from "../Atoms/MakeThreadButton";
import AppBar from '@mui/material/AppBar'
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';


const Header = () => {
    return(
        <div style = {{ width:"100%" }}>
       <AppBar>
            <Toolbar>
                <div style={{ flexGrow: 1 }}></div>
                <Box>
                    <MakeThreadButton/> 
                    <AccountButton />
                </Box>
            </Toolbar>
       </AppBar>
       </div>
    )
}

export default Header