import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
const apiUrl = "https://echo-6sdzv54itq-uc.a.run.app/natiq";
import { decode, isBase64 } from "url-safe-base64";

const NatiqContext = createContext();
const NatiqProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const [durations, setDurations] = useState(null);
  const handleNatiqApi = async (textData) => {
    setIsLoading(true);
    const lastWord = textData.split(" ").pop();
    const textWithEcho = `${textData} ${lastWord} ${lastWord}`;
    try {
      const formatData = { text: textWithEcho };
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(formatData),
        redirect: "follow",
      };

      const response = await fetch(apiUrl, requestOptions);
      const result = await response.json();
      const { wave, durations } = result;
      if (wave) {
        const waveToBase64 = decode(wave);
        if (isBase64(waveToBase64)) {
          setAudioData(waveToBase64);
        }
      }
      if (durations) {
        setDurations(durations);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  const handleClear = () => {
    setAudioData(null);
    setDurations(null);
  };
  const natiq = {
    handleNatiqApi,
    isLoading,
    audioData,
    handleClear,
    durations,
  };

  return (
    <NatiqContext.Provider value={natiq}>{children}</NatiqContext.Provider>
  );
};

const useContextNatiq = () => useContext(NatiqContext);

export { NatiqProvider, useContextNatiq };
