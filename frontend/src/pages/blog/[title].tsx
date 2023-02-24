import Contents from "@/components/Molecules/Contents"
import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextPage,
  } from 'next'
import ThreadPropsType from "@/types/ThreadProps";
import ThreadCardPropsType from "@/types/ThreadCardProps";

export const getServerSideProps = async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<ThreadCardPropsType>> => {
    // context経由でブラウザから送信されたパラメーターを受け取る
    const { title } = context.query
    // 受け取ったパラメーターが意図した型でなければnotfoundページとして処理する
    if (typeof title !== 'string') {
      return { notFound: true }
    }
    // 受け取ったパラメータに問題がなければStatusPagePropsを返す
    return { props: { title } }
  }
const ThreadPage:NextPage<ThreadPropsType> = (props) => {
    return (
        <Contents title={props.title} />
    )
}
export default ThreadPage