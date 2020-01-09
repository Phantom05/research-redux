import {useRouter} from 'next/router';
import Layout from '../comps/Layout';


const Content =() =>{
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      {/* <h1>{router.query.title}</h1> */}
      <h1>{router.query.id}</h1>
      <p>This is the log post content.</p>
    </>
  )
}

const Post = () =>(
  <Layout>
    <Content />
    </Layout>
)

export default  Post