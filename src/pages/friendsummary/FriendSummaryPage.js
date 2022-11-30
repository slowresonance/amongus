import React from "react";
import { useParams } from "react-router-dom";
import FriendSummary from "./FriendSummary";

const FriendSummaryPage = () => {
  const { id } = useParams();
  return <FriendSummary id={id} />;
};

export default FriendSummaryPage;
