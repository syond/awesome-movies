import api from "./api";

interface ApiProps {
  action: string;
  type?: string;
  id?: string;
  page?: number;
  region?: string;
}

async function apiGetRequest(props: ApiProps) {
  const response = await api.get(
    `${props.action}${props.type ? `/${props.type}`  : "" || props.id ? `/${props.id}` : ""}?api_key=${
      process.env.REACT_APP_API_KEY
    }&language=${process.env.REACT_APP_API_LANGUAGE}&region=${
      props.region ? `/${props.region}` : ""
    }${props.page ? `&page=${props.page}` : ""}`
  );

  return response;
}

export { apiGetRequest };
