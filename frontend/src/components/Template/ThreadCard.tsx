import React, { useState } from 'react'
import Axios from 'axios'
import ThreadTemplate from './ThreadTemplate'

type ThreadCardPropsType = {
    title:string;
}
type ThreadPropsType = {
    title:"";
    context:"";
    tag:Array<string>;
    group:Array<string>;
}

const ThreadCard = (props:ThreadCardPropsType) => {
    const [results,setResults] = useState<ThreadPropsType>({
        title:"",
        context:"",
        tag:[],
        group:[]
    })
    const ThreadFind = (e:any) => {
        e.preventDefault();
        Axios.post("",{title:props.title})
        .then(res=>{
            setResults(res.data)
        })
        return(
            <ThreadTemplate title={results.title} context={results.context} 
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