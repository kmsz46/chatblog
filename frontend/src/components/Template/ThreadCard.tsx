import React, { useState } from 'react'
import Axios from 'axios'
import ThreadTemplate from './ThreadTemplate'

type ThreadCardPropsType = {
    title:string;
}
type ThreadPropsType = {
    title:string;
    content:string;
    article_user:string;
    tag:Array<string>;
    group:Array<string>;
}

const ThreadCard = (props:ThreadCardPropsType) => {
    const [results,setResults] = useState<ThreadPropsType>({
        title:"",
        content:"",
        article_user:"",
        tag:[],
        group:[]
    })
    const ThreadFind = (e:any) => {
        e.preventDefault();
        Axios.post("http://127.0.0.1:5000/contents",{title:props.title})
        .then(res=>{
            setResults(res.data.blog)
        })
        console.log(results)
        return(
            <ThreadTemplate title={results.title} content={results.content} 
                            article_user = {results.article_user}
                            tag = {results.tag} group = {results.group}/>
        )
    }
    return (
    <button onClick={ThreadFind}>
        {props.title}
    </button>
    );
}  

export default ThreadCard