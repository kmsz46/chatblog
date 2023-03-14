import * as React from 'react';
import TextField from '@mui/material/TextField';
import UserDataType from '@/types/UserData'

// ユーザの名前を表示するコンポーネント
const UserNameDisplay= (props: UserDataType) => {
  return (
    <TextField label={ props.name } disabled />  
  );
};

export default UserNameDisplay;