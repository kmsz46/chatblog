import React, { useState,useMemo } from "react"
// import SimpleMDE from 'react-simplemde-editor'
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });
import 'easymde/dist/easymde.min.css'
import dynamic from "next/dynamic";


type MarkdownProps = {
    setMarkdown:React.Dispatch<React.SetStateAction<string>>;
    // Edit:(e:any) => void
}

export const MarkDownEditor = (props:MarkdownProps) => {
    // const [markdown, setMarkdown] = useState('')
    const setOptions = useMemo(() => {
        return {
            autofocus: true,
            spellChecker: false,
            toolbar: ["bold","strikethrough","quote","unordered-list",
                    "ordered-list","link","image","horizontal-rule", "table","preview"]
        };
      }, []);
    return(
        <SimpleMDE
        onChange={e => props.setMarkdown(e)}
        options={setOptions as EasyMDE.Options} 
        />
        
    )
}
export default MarkDownEditor