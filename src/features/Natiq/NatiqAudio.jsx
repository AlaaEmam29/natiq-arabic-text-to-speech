import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useContextNatiq } from "../../context/NatiqContext";

export default function NatiqAudio() {
  const { audioData } = useContextNatiq();

  return (
    <>
      {audioData && (
        <AudioPlayer
          src={`data:audio/wav;base64,${audioData}`}
          autoPlay
          controls
          onPlay={e => console.log("onPlay")}
        />
      )}
    </>
  );
}
