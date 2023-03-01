import Button from '@mui/material/Button'

type Props = {
  handleClick: () => void
};

const DisplaySettingButton = ({ handleClick }: Props) => {
  return (
    <Button variant="outlined" onClick={ handleClick }>表示設定</Button>
  );
};

export default DisplaySettingButton;