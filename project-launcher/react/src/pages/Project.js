

import React from 'react';
import {LoginForm} from 'compoennts/common/Form';

const LoginComps = withAjax(<LoginForm />)({
  url:`https://localhost.com:8080/login`,
  method:'post',
});

function Project(props) {
  const [data,setData] =  useState('');


  return (
    <div>
        {<LoginComps /> }
    </div>
  );
}

export default Project;



// import React from 'react';
// import {PlainTemplate} from 'components/base/template';
// import {HeaderContainer,HomeContainer} from 'containers/common';
// import hoc from 'utls/hoc';


// const ReduxHeaderContainer = hoc(<HeaderContainer />)({project})
// const ReduxHomeContainer = hoc(<HomeContainer />)({main,auth})


// function Project(props) {

  
//   return (
//     <PlainTemplate 
//       header={<ReduxHeaderContainer />}
//       chidren={<ReduxHomeContainer />}
//     />
//   );
// }

// export default Project;