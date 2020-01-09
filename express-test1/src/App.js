import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [result, setResult] = useState(0)


  const countUrl = `http://127.0.0.1:6322/hello`;
  const exeUrl = `http://127.0.0.1:6322/open/exe`;

  async function handleTesting(conf) {
    const { url, data: dataList } = conf;
    const axiosConf = {
      url: url,
      method: "post",
      data: dataList
    }
    const { data } = await axios(axiosConf);
    console.log(data);
    setResult(prevData => {
      return prevData + data.result
    })
  }


  useEffect(() => {
    handleTesting({
      url: countUrl
    });
  }, [])


  console.log(result);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {result}
        </p>
        <div>
          <button
            onClick={() => handleTesting({
              url: countUrl,

            })}
            className="btn"
          >Ajax</button>

          <button
            onClick={() => handleTesting({
              url: exeUrl,
              data: {
                type: "exe",
                name: "vscode"
              }
            })}
            className="btn"
          >vscode exe</button>

          <button
            onClick={() => handleTesting({
              url: exeUrl,
              data: {
                type: "exe",
                name: "chrome"
              }
            })}
            className="btn"
          >chrome exe</button>

        </div>
      </header>
    </div>
  );
}

export default App;
