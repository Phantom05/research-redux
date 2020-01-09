import {useRouter} from 'next/router';
import Layout from '../../comps/Layout';
import Markdown from 'react-markdown';


const input =`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.
### This is a title
And here's the content.
`
const Post = props =>{
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown source={input} />
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
        `}</style>  
      </Layout>
  )
}

export default Post;


