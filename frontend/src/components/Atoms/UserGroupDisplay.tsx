import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import UserDataType from '@/types/UserData'

// ユーザの所属グループを表示するコンポーネント
const UserGroupDisplay= (props: UserDataType) => {
  return (
    <>
      <Stack direction="row" spacing={1}>
        {props.group.map((value) => (
          <Chip 
            variant="outlined"
            key={value}
            label={value}
          />
        ))} 
      </Stack>
    </>
  );
};

export default UserGroupDisplay;