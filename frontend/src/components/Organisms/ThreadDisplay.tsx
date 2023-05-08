import ThreadCard from "../Molecules/ThreadCard";
import ThreadCardPropsType from "@/types/ThreadCardProps";
import React from 'react'

// 引数の型、スレッドカードを要素とした配列
type ResultPropsType = {
    threadlist:ThreadCardPropsType[];
}

// スレッドをループ処理によって複数表示する。
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