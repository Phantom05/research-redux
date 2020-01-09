
import Layout from '../comps/Layout';

function About(props) {
  console.log(props,'About');
  return (
    <>
      <Layout>
        <h1>About</h1>
        <p>Hello, Programming</p>
      </Layout>
    </>
  )
}

export default About;