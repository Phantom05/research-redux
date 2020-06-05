import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRequest } from "lib/utils";
import { useParams } from "react-router-dom";
import { http, API } from "lib/api";

function App() {
  // const { data } = useRequest(
  //   {
  //     api: "world.hello",
  //     params: "/hello",
  //   },
  //   { suspense: true }
  // );

  console.log(API.world.hello("/hello"));

  const handleClick = (config) => {
    console.log("handleClick");
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click</button>
      </header>
    </div>
  );
}
// const ArticleDetail = () => {
//   const { id } = useParams();

//   return (
//     <div style={{ padding: 30 }}>
//       <h2>ArticleDetail</h2>
//       {/* <ErrorBoundary fallback={<div>내용을 불러올 수 없습니다.</div>}> */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <Detail id={id} />
//         </Suspense>
//       {/* </ErrorBoundary> */}
//     </div>
//   );
// };

export default App;
