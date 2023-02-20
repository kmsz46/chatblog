import React, { useState } from 'react'
import Axios from 'axios'
import ThreadTemplate from '../Template/ThreadTemplate';
import ThreadPropsType from '@/types/ThreadProps';

const ThreadFind = (e:any,title:string) => {
    const [results,setResults] = useState<ThreadPropsType>({
        title:"",
        content:"",
        article_user:"",
        tag:[],
        group:[]
    })
    e.preventDefault();
    Axios.post("http://127.0.0.1:5000/contents",{title:title})
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

export default ThreadFind