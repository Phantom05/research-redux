import React, { useEffect, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRequest, useSwrRequest } from "lib/utils";
import { useParams } from "react-router-dom";
import { http, API } from "lib/api";
import useSWR from "swr";
import { useImmer } from "use-immer";
import styled from "styled-components";

const AppState = {
  loading: true,
  data: null,
  detail: null,
};
function App() {
  const [values, setValues] = useImmer(AppState);
  const { data, isLoading, isValidating } = useSwrRequest(
    {
      api: "project.list",
      params: {
        hi: "1",
      },
      body: {
        bye: "5",
      },
    }
    // { suspense: true }
  );

  console.log(data, "component data");

  const handleClick = (config) => {
    const { e, type } = config;
    if (type === "item") {
      const getId = e.target.getAttribute("data-name");

      setValues((draft) => {
        draft.detail = getId;
      });
    }
  };

  // Loading... 바 잡을라면 isLoading과 isVaildating 을 사용해야함
  console.log(isLoading, "isLoading");
  console.log(isValidating, "isValidating");
  if (!data) return <div>loading...</div>;
  return (
    <Styled.App className="App">
      <header className="App-header">
        <div>
          {data.list.map((item) => {
            return (
              <div
                className="title"
                key={item.id}
                data-name={item.id}
                onClick={(e) => handleClick({ e, type: "item" })}
              >
                {item.content}
              </div>
            );
          })}
        </div>

        <div className="detail">
          {values.detail && <FetchAndRender id={values.detail} />}
        </div>
      </header>
    </Styled.App>
  );
}

function FetchAndRender(props) {
  const { id } = props;
  const { data } = useSwrRequest(
    {
      api: "project.detail",
      body: {
        userId: id,
      },
    }
    // { suspense: true }
  );
  return <>{data ? <h1>{data.name}</h1> : null}</>;
}
export default App;

const Styled = {
  App: styled.div`
    & {
      .title {
        font-size: 16px;
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
      }
    }
  `,
};
