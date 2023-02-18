import ThreadCard from "./ThreadCard";
import React from 'react'
import {useState} from 'react'
import Axios from 'axios'

type ResultPropsType = {
    threadlist:string[];
}

const ThreadDisplay : React.FC<ResultPropsType> = React.memo(({threadlist}) => {
    return(
      <>
      {threadlist.map((result) => { 
        return(
            <ThreadCard title={result}/>
        );
    })}
    </>
    )
}) 

export default ThreadDisplay