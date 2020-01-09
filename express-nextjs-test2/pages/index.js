import { useState } from 'react';
import Layout from '../comps/Layout';
import Link from 'next/link';
import axios from 'axios';
import {Footer} from '../comps/common/footer'

console.clear();

const PostLink = props => {
  console.log(props);
  return (
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  )
};

const Blog = props => (
  <>
    <h2>Blog</h2>
    <ul>
      <PostLink id="hello-nextjs" />
      <PostLink id="Learn Next.js is awesome" />
      <PostLink id="Deploy apps with Zeit" />
    </ul>
  </>
);


const Index = props => {
  const [value, setValue] = useState(0);

  return (
    <>
    <Layout>
      <h1>Next.js</h1>
      <p>Hello, Next.js</p>
      {/* <Blog /> */}
      <h2>Batman TV Shows</h2>
      <ul>
        {props.shows && props.shows.map(show => (
          <li key={show.id}>
            <Link href="/p[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <Footer/>
        <style jsx>{`
          a{
            color:blue;
            text-decoration:none;
          }
        `}</style>
      </Layout>
    </>
  )
}

Index.getInitialProps = async () => {
  const axiosConf = {
    url: 'https://api.tvmaze.com/search/shows?q=batman',
    method: "get"
  }
  const {data} = await axios(axiosConf);
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  }
}

// export default withLayout(Index)
export default Index;



