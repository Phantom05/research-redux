import Layout from '../../comps/Layout';
import {useRouter} from 'next/router';
import axios from 'axios';
// 전체를 id로 지원할 순 있는데
// /pages/p/post-[id].js이런 식으로 도중에 추가할 순 없음,
const Post = props => {
  const router = useRouter();
  console.log(router.query);
  console.log(props);
  return (
    <>
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      {props.show.image ? <img src={props.show.image.medium} /> : null}
    </Layout>
    </>
  )
}

// 이 아랫부분은 위에 Post가 렌더링 되기전에 서버쪽에서 진행됨
// 때문에 브라우저 화면에서 볼수가 없음.
// 터미널로 봐야하는 부분임 ㅇ_ㅇ
Post.getInitialProps = async (context)=> {
  const { id } = context.query;
  
  const axiosConf ={
    url:`https://api.tvmaze.com/shows/${id}`
  }
  const {data} = await axios(axiosConf);
  // console.log(data,'235235235');
  return { show:data };
};

// export default withLayout(Post)
export default Post