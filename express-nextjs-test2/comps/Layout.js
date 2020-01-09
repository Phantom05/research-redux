import Header from './Header';

const layoutStyle={
  margin:20,
  padding:20,
  border:`1px solid #ddd`
}

const Layout = props =>(
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);




const withLayout = async Page=>{
  console.log(`-------`);
  let data;
  if(Page.getInitialProps){
    await Page.getInitialProps()
    .then(response=>{
      data = response;
    })
  }

  console.log(data,'data');
  return ()=>(
    <div style={layoutStyle}>
      <Header />
      {/* <Page {...data}/> */}
      <Page/>

    </div>
  )
}

export default Layout;