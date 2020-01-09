
import Layout from '../comps/Layout';
import axios from 'axios';
import Link from 'next/link';
import {Footer} from '../comps/common/footer'

function Home(props){
  return (
    <Layout>
      <h1>Next.js</h1>
      <p>Hello, Next.js</p>
      <h2>Batman TV Shows</h2>


        <style jsx>{`
          a{
            color:blue;
            text-decoration:none;
          }
        `}</style>
      </Layout>
  )
}



export default Home;



