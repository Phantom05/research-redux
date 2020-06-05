import useSWR from "swr";
// import API, { http } from "~/api";
import { API, http } from "./api";
import axios from "axios";

export function useRequest(request, { initialData, ...config } = {}) {
  const APIWrapper =
    typeof request?.api === "string" &&
    request.api.split(".").reduce((a, c) => a[c], API);
  const usingAPIwrapper = typeof APIWrapper === "function";
  const usingAxios = typeof request?.url === "string";

  const key = usingAPIwrapper || usingAxios ? JSON.stringify(request) : request;
  const fetcher = () =>
    usingAPIwrapper ? APIWrapper(request.params) : http(request || {});

  const options = {
    ...config,
    initialData: initialData && {
      status: 200,
      statusText: "InitialData",
      headers: {},
      data: initialData,
    },
  };

  const { data: response, error, isValidating, mutate } = useSWR(
    request && [key, ...(request.deps || [])],
    fetcher,
    options
  );

  return {
    data: response?.data,
    response,
    error,
    isValidating,
    isLoading: !response?.data && !error,
    mutate,
    key,
  };
}

/**
 *
 * @param {*} request
 * @param {*} param1
 */
export function useSwrRequest(request, { initialData, ...config } = {}) {
  const APIWrapper =
    typeof request?.api === "string" &&
    request.api.split(".").reduce((a, c) => a[c], API);
  const fetcher = () =>
    APIWrapper({ params: request.params, body: request.body });

  const options = {
    ...config,
    initialData: initialData && {
      status: 200,
      statusText: "InitialData",
      headers: {},
      data: initialData,
    },
  };
  const { data: response, error, isValidating, mutate } = useSWR(
    request && JSON.stringify(request),
    fetcher,
    options
  );

  return {
    data: response?.data,
    response,
    error,
    isValidating,
    isLoading: !response?.data && !error,
    mutate,
    // key,
  };
}
