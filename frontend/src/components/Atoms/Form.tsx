import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import FormPropsType from '@/types/FormProps';


const Form = (props:FormPropsType) => {
    return (
        <TextField
        sx={{ ml: 1, flex: 1 }}
        placeholder="タイトル"
        onChange={e => props.setWord(e.target.value)}
      />
    );
};

export default Form;