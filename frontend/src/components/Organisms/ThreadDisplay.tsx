import ThreadCard from "../Molecules/ThreadCard";
import React from 'react'


type ResultPropsType = {
    threadlist:string[];
}

const ThreadDisplay : React.FC<ResultPropsType> = React.memo(({threadlist}) => {
    return(
      <>
      {threadlist.map((result,index) => { 
        return(
            <ThreadCard id = {index} title={result}/>
        );
    })}
    </>
    )
}) 

export default ThreadDisplay