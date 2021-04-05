import axios from "axios";

const URL = `https://api.twitch.tv`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'Client-ID': `enlxqhs0jb0du52vj0fzmljst09cf8`,
      'Authorization': `Bearer pku5ibszmnv29talzc9f3kt1dgobr4`,
      'Accept': `application/vnd.twitchtv.v5+json`
    }
  })

  const onSuccses = (response) => response;

  const onFail = (err) => {
    throw err;
  }

  api.interceptors.response.use(onSuccses, onFail);

  return api
}
