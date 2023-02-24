import Axios from 'axios'
import ThreadIDPropsType from '@/types/ThreadIDProps'

async function ThreadFind (props:ThreadIDPropsType) {
    const response = await Axios.post("http://127.0.0.1:5000/contents",{id:props.id})
    return response
}

export default ThreadFind