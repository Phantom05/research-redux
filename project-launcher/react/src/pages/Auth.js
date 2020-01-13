// import React,{ useState,useMemo,useCallback,useRef } from 'react';
import React  from 'react';
import { Switch, Route,withRouter } from 'react-router-dom';
import SignInContainer from 'containers/auth/SignInContainer';
import SignUpContainer from 'containers/auth/SignUpContainer';
// import {useSelector ,useDispatch,useStore} from 'react-redux';
// import {increment, decrement} from 'store/modules/auth';
// import styled from 'styled-components';
// import {useInput,usePromise} from 'lib/utils';
// import axios from 'axios';


function Auth(props){
  console.log(props,'props');
  const {match} = props;
  console.log(match,'m');
  return(
  <Switch>
     <Route path={`${match.path}/signin`} component={SignInContainer} />
     <Route path={`${match.path}/signup`} component={SignUpContainer} />
    
  </Switch>)
}

export default withRouter(Auth);

// const getAverage = numbers =>{
//   console.log('평균값 계산중..');
//   if(numbers.length === 0) return 0;
//   const sum = numbers.reduce((a,b)=>a + b);
//   return sum / numbers.length;
// }

// const Average = () =>{
//   const [list,setList] = useState([]);
//   const [number,setNumber] = useState('');
//   const id = useRef(1);


//   const onChange = useCallback(e =>{
//     setNumber(e.target.value);
//   },[]);//컴포넌트가 처음 렌더링 될 때만 함수 생성

//   const onInsert = useCallback(e =>{
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber('');
//     console.log(id);
//   },[number,list]); // nuumber 혹인 list가 바뀌었을때만 함수 생성

//   const avg = useMemo(()=> getAverage(list),[list])

//   return (
//     <div>
//       <input onChange={onChange} value={number}/>
//       <button onClick={onInsert}>등록</button>
//       <ul>
//       {list.map((value,index)=>(
//         <li key={index}>{value}</li>
//       ))}
//       </ul>
//       <div>
//         <b>평균 값: </b>{avg}
//       </div>
//     </div>
//   )
// }


// const wait = () =>{
//   return axios('https://jsonplaceholder.typicode.com/todos')
// }
// function Auth(props) {
//   const {auth:authReducer} = useSelector(state=>state,[]);
//   // const reduceer = useReducer(state=>state,[]);
//   const dispatch = useDispatch();
//   const store = useStore();

//   const [state,onChange] = useInput({
//     name:"",
//     nickname:"''"
//   });
//   const {name,nickname} = state;

//   const onIncrease =()=>{
//     dispatch(increment())
//   }
//   const onDecrease =()=>{
//     dispatch(decrement())
//   } 

//   const [loading,resolved,error] = usePromise(wait,[]);
//   if (loading) return <div>로딩중..!</div>;
//   if (error) return <div>에러 발생!</div>;
//   if (!resolved) return null;

  
//   console.log(authReducer,'authReducer');
//   console.log(store,'store');
//   console.log(resolved,'resolved');
//   console.log(state,'state');
//   // console.log(reduceer,'reduceer');
//   return (
//     <Stlyed.Auth>
//       <div>
//        <h1>{authReducer.count}</h1>
//       <div>
//         <button onClick={onIncrease}>+1</button>
//         <button onClick={onDecrease}>-1</button>
//       </div>
//       <Average />
//     </div>
//     <hr/>

//     <div>
//       <input type="text" name="name" onChange={onChange} value={name}/>
//       <input type="text" name="nickname" onChange={onChange} value={nickname}/>
//     </div>
//     <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임: </b>
//           {nickname}
//         </div>
//     </Stlyed.Auth>
//   );
// }

// const Stlyed={
//   Auth:styled.div`

  
//   `
// }


// export default Auth;