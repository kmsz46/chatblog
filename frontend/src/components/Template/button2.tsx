import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from'@mui/material/Stack'

const Buttonform2 = () => {
    return(
        // row(行)で並べた時に間のスペースを{数字}分開ける
        /* startIconで文字の最初にアイコンをつける
           endIconで文字の最後にアイコンをつける */
        <Stack direction = "row" spacing = {50}> 
            <Button variant = "outlined" startIcon = {<DeleteIcon />}>
                削除
            </Button>
            <Button variant = "contained" endIcon = {<SendIcon />}>
                送信
            </Button>
        </Stack>
    )
}

export default Buttonform2