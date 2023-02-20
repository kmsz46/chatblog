import type { NextPage } from 'next';
import React, { useState, useEffect } from "react";
import Axios from 'axios'


const TitleGet = () => {
    const [threadtitle,setThreadTitle] = useState<string[]>([]);
    Axios.post("http://127.0.0.1:5000/display")
    .then(res => {
      setThreadTitle(res.data.blog_title)
    })
    return threadtitle
  }

export default TitleGet