import React, { useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useContextNatiq } from "../../context/NatiqContext";

export default function NatiqAudio() {
  const { audioData ,handleClear} = useContextNatiq();
useEffect(()=>{
  return ()=>handleClear()

} , [])
  return (
    <>
      {audioData && (
        <AudioPlayer
          src={`data:audio/wav;base64,${audioData}`}
          autoPlay
          controls
          onPlay={(e) => console.log("onPlay")}
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        />
      )}
    </>
  );
}
