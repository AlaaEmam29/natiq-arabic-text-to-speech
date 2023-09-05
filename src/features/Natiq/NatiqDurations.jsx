import React from "react";
import Durations from "../../ui/Durations";
import { useContextNatiq } from "../../context/NatiqContext";

export default function NatiqDurations() {
  const { audioData, durations } = useContextNatiq();

  return (
    <>
      {audioData &&
        durations &&
        durations.map((duration, index) => (
          <Durations key={index} duration={duration} />
        ))}
    </>
  );
}
