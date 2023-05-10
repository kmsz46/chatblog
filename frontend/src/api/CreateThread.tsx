import Axios from 'axios'


const CreateThread = (e:any,props:any) => {
    e.preventDefault();
    Axios.post("http://127.0.0.1:5000/contents",props)
}

export default CreateThread