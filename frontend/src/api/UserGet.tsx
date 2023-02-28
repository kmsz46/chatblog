import Axios from 'axios'

const UserGet = () => {
    return Axios.post("http://127.0.0.1:5000/user")
  }

  export default UserGet