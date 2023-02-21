import Axios from 'axios'

async function ThreadFind (title:string) {
    const response = await Axios.post("http://127.0.0.1:5000/contents",{title:title})
    return response
}

export default ThreadFind