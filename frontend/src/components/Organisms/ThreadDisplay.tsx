import ThreadCard from "../Molecules/ThreadCard";
import React from 'react'


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