import { useRouter } from "next/router";
import ReactMarkdown from 'react-markdown';

const Contents = () =>{
    const router = useRouter();
    console.log(router.query.title)
    return (
        <>
        <h1>{router.query.title}</h1>
        <p>{router.query.article_user}</p>
        <p>{router.query.tag}</p>
        <p>{router.query.group}</p>
        <ReactMarkdown>{router.query.content}</ReactMarkdown>
        </>
    )
}

export default Contents