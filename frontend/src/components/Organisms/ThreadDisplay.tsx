import ThreadCard from "../Molecules/ThreadCard";
import ThreadCardPropsType from "@/types/ThreadCardProps";
import React from 'react'


type ResultPropsType = {
    threadlist:ThreadCardPropsType[];
}

const ThreadDisplay : React.FC<ResultPropsType> = React.memo(({threadlist}) => {
    return(
      <>
      {threadlist.map((result) => { 
        return(
            <ThreadCard id={result.id} title={result.title}/>
        );
    })}
    </>
    )
}) 

export default ThreadDisplay