import api from "./api";

import { IApiProps } from "../interfaces";

async function apiGetRequest(props: IApiProps) {
  const response = await api.get(
    `${props.search !== true ? "" : "/search/"}${props.action}${
      props.type ? `/${props.type}` : "" || props.id ? `/${props.id}` : ""
    }?api_key=${process.env.REACT_APP_API_KEY}&language=${
      process.env.REACT_APP_API_LANGUAGE
    }&region=${props.region ? `/${props.region}` : ""}${
      props.page ? `&page=${props.page}` : ""
    }
    ${props.query ? `&query=${props.query}` : ""}`
  );

  return response;
}

export { apiGetRequest };
