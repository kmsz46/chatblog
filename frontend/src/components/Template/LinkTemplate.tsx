import type { NextPage } from 'next'
import Link from "next/link"
const LinkTemplate:NextPage = () =>{
  return (
    <>
      <Link href="home">
        <div>スレッド表示</div>
      </Link>
      <Link href="id">
        <div>ユーザ情報</div>
      </Link>
      <Link href="thread">
        <div>スレッド内部</div>
      </Link>
      <Link href="threadwrite">
        <div>スレッド作成</div>
      </Link>
    </>
  )
}

export default LinkTemplate