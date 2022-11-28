import React from "react";
import Sets from "./Sets";
import Back from "../../components/Back";

const SetsPage = () => {
  return (
    <>
      <Back text="Back to Split" path="/new-split" />
      <Sets />
    </>
  );
};

export default SetsPage;
