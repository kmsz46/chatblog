import type { NextPage } from 'next'
import TagSelect from '../Atoms/TagSelect'
import React, { useState } from 'react'

const ThreadWriteTemplate:NextPage = () =>{
    const [tag,setTag] = useState<string>("")
    // console.log(tag)
    return (
        <>
        <h1>スレッド作成</h1>
        <TagSelect setTag={setTag}></TagSelect>
        </>
    )
}

export default ThreadWriteTemplate