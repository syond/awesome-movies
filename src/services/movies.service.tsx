import api from "./api";

interface ApiProps {
  action: string;
  type?: any;
  page?: number;
  region?: string;
}

async function apiGetRequest(props: ApiProps) {
  const response = await api.get(
    `${props.action}${props.type ? "/" + props.type : ""}?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=${process.env.REACT_APP_API_LANGUAGE}&region=${
      props.region ? "/" + props.region : ""
    }&page=${props.page}`
  );

  return response;
}

export { apiGetRequest };
