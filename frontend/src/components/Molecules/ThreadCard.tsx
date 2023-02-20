import React, { useState } from 'react'
import ThreadFind from '../Organisms/ThreadFind'

type ThreadCardPropsType = {
    title:string;
}

const ThreadCard = (props:ThreadCardPropsType) => {
    return (
    <button onClick={ThreadFind}>
        {props.title}
    </button>
    );
}  

export default ThreadCard