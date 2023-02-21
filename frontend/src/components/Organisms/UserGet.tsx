import Axios from 'axios'

async function UserGet () {
    const response = await Axios.post("http://127.0.0.1:5000/user")
    return response
  }

  export default UserGet