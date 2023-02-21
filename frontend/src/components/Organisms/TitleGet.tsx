import Axios from 'axios'


async function TitleGet () {
    const response = await Axios.post("http://127.0.0.1:5000/display")
    return response
  }

export default TitleGet