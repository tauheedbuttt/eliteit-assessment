import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

export default () => {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryToObject = (str) => {
    // key=value&key=value
    const keys = str.split("&").filter((item) => item);
    const obj = { page: "1", limit: "10", text: "" };
    keys.forEach((item) => {
      obj[item.split("=")[0]] = item.split("=")[1]?.replaceAll("+", " ");
    });
    return obj;
  };
  const objToQuery = (obj) => {
    return Object.keys(obj)
      .filter((item) => !!obj[item])
      .map((key) => `${key}=${obj[key]}`)
      .join("&");
  };
  const href = (data) => {
    return `${pathname}?${objToQuery({
      ...query,
      ...(data ? data : {}),
    })}`;
  };

  const query = queryToObject(searchParams.toString());
  const setQuery = (data) => navigate(href(data));

  return {
    pathname,
    query,
    setQuery,
    href,
    queryToObject,
    objToQuery,
  };
};
