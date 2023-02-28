import Axios from 'axios'
import ThreadIDPropsType from '@/types/ThreadIDProps'

const ThreadFind = (props:ThreadIDPropsType) => {
    return Axios.post("http://127.0.0.1:5000/contents",{id:props.id})
}

export default ThreadFind