import ThreadCard from "./ThreadCard";
import React from 'react'
import {useState} from 'react'
import Axios from 'axios'

type ThreadCardPropsType = {
    title:string;
    Display:(e:any) => void;
}
type ResultPropsType = {
    threadlist:string[];
}

const ThreadDisplay : React.FC<ResultPropsType> = React.memo(({threadlist}) => {
    return(
      <>
      {threadlist.map((result) => { 
        setTitle(result)
        return(
            <ThreadCard title={result}/>
        );
    })}
    </>
    )
}) 

export default ThreadDisplay