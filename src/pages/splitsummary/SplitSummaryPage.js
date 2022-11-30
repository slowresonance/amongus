import React from "react";
import SplitSummary from "./SplitSummary";
import Back from "../../components/Back";
import { useParams } from "react-router-dom";

const SplitSummaryPage = () => {
  const { id } = useParams();
  return (
    <>
      <Back text="Back" path="/" />
      <SplitSummary id={id} />
    </>
  );
};

export default SplitSummaryPage;
