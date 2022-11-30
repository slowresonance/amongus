import React from "react";
import GroupFeed from "./GroupFeed";
import { useParams } from "react-router-dom";

const GroupFeedPage = () => {
  const { id } = useParams();
  return <GroupFeed id={id} />;
};

export default GroupFeedPage;
