import React from "react";
import styled from "styled-components";
import Wave from "./Wave";

const waves = [
  {
    breakdown: "550+200+20+60",
    participants: ["649guorg9ng", "rigubirg83f", "wwfifeyb47f", "if38y494fbwo"],
  },
  {
    breakdown: "200+100+40+100",
    participants: ["rifhih448uigf", "iu4ghuiho34o"],
  },
  {
    breakdown: "450+20",
    participants: ["649guorg9ng", "rigubirg83f", "wwfifeyb47f", "if38y494fbwo"],
  },
];

const StyledWavePage = styled.div`
  margin-top: 80px;
`;

const WavePage = () => {
  return (
    <StyledWavePage>
      {waves.map((wave, index) => (
        <Wave wave={wave} key={wave.breakdown} index={index} />
      ))}
    </StyledWavePage>
  );
};

export default WavePage;
