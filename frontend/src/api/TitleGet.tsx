import Axios from 'axios'


const TitleGet = () => {
    return Axios.post("http://127.0.0.1:5000/display")
  }

export default TitleGet