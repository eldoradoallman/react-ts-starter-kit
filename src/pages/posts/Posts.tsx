import React from "react";
import { RouteProps } from "react-router-dom";

import { usePosts } from "./usePosts";

export const Posts: React.FC<RouteProps> = (props) => {
  const { title } = usePosts(props);

  return (
    <div className="posts-page">
      <h1>{title}</h1>
    </div>
  );
};
