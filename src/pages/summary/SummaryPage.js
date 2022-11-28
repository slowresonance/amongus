import React from "react";
import Summary from "./Summary";
import Back from "../../components/Back";
import { Params } from "react-router-dom";

const SummaryPage = ({ srcPath }) => {
  return (
    <>
      <Back text="Back" path={srcPath} />
      <Summary />
    </>
  );
};

export default SummaryPage;
