import React from "react";
import { PuffLoader } from "react-spinners";

export default function Loading() {
  return (
    <PuffLoader
      color="#1c75bc"
      size={200}
      cssOverride={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50% , -50%)",
      }}
    />
  );
}
