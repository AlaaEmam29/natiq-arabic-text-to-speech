import React from "react";

export default function Durations({ duration }) {
  const [text, start, end] = duration;

  return (
    <>
      <span>{text}</span> ({end.toFixed(2) - start.toFixed(2)} millisecond)
      <br />
    </>
  );
}
