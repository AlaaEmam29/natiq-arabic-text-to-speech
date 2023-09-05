import React from "react";
import { useContextNatiq } from "../context/NatiqContext";
import Loading from "../ui/Loading";
import NatiqForm from "../features/Natiq/NatiqForm";
import NatiqAudio from "../features/Natiq/NatiqAudio";
import NatiqDurations from "../features/Natiq/NatiqDurations";

export default function Natiq() {
  const { isLoading } = useContextNatiq();

  return (
    <div>
      {isLoading && <Loading />}
      <NatiqForm />

      <NatiqAudio />
    </div>
  );
}
