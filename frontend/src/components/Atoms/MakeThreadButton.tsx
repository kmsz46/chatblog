import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { IconButton } from '@mui/material';

const MakeThreadButton = () => {
    return(
        <>
       <Button variant = "outlined" color = "inherit" startIcon = {<BorderColorIcon />}>
        作成
       </Button>
       </>
    )
}

export default MakeThreadButton