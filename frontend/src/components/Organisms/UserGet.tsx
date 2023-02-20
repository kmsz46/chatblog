import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import Axios from 'axios'
import UserDataType from '@/types/UserData';

const UserGet = () => {
    const [userdata,setUser] = useState<UserDataType>({
        name:"",
        group:[]
    });
    const [threadtitle,setTheadTitle] = useState<string[]>([]);
    Axios.post("http://127.0.0.1:5000/user")
    .then(res => {
      setUser(res.data.user_info)
      setTheadTitle(res.data.blog_info)
  })
  return {"user":userdata,"title":threadtitle}
  }

  export default UserGet