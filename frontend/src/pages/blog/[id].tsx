import Contents from "@/components/Molecules/Contents"
import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage,
  } from 'next'
import ThreadIDPropsType from "@/types/ThreadIDProps";

export const getServerSideProps = async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<ThreadIDPropsType>> => {
    // context経由でブラウザから送信されたパラメーターを受け取る
    const { id } = context.query
    // 受け取ったパラメーターが意図した型でなければnotfoundページとして処理する
    if (typeof id !== 'string') {
      return { notFound: true }
    }
    // 受け取ったパラメータに問題がなければStatusPagePropsを返す
    return { props: { id } }
  }
const ThreadPage:NextPage<ThreadIDPropsType> = (props) => {
    return (
        <Contents id={props.id} />
    )
}
export default ThreadPage