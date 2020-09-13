import {
  // useParams,
  // useHistory,
  // useLocation,
  useRouteMatch,
  RouteProps,
} from "react-router-dom";

interface ParamsId {
  id?: string;
}

export const usePosts = (props?: RouteProps) => {
  // const params = useParams<ParamsId>();
  // const history = useHistory();
  // const location = useLocation();
  const routeMatch = useRouteMatch();
  // const query = new URLSearchParams(location.search);
  // const key = query.get("key");
  // const time = query.get("time");

  // console.log("params", params);
  // console.log("history", history);
  // console.log("location", location);
  // console.log("routeMatch", routeMatch);
  // console.log("query key", key);
  // console.log("query time", time);

  return { title: routeMatch.url };
};
