import { useState,useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import ThreadPropsType from "@/types/ThreadProps";
import ThreadFind from '@/api/ThreadFind';
import ThreadIDPropsType from '@/types/ThreadIDProps';

//スレッドの内容を表示するコンポーネント
const Contents = (props:ThreadIDPropsType) =>{
    const [thread,setThread] = useState<ThreadPropsType>({
        id:"",
        title:"",
        content:"",
        article_user:"",
        tag:[],
        group:[]
    })
    //API処理によるスレッド内容取得
    useEffect(() => {
        ThreadFind(props).then(res => {
          setThread(res.data.blog)
        });
    },[])
    return (
        <>
        <h1>{thread.title}</h1>
        <p>{thread.article_user}</p>
        <p>{thread.tag}</p>
        <p>{thread.group}</p>
        <ReactMarkdown>{thread.content}</ReactMarkdown>
        </>
    )
}

export default Contents