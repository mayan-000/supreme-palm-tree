// useSpeechToText.ts
import { useState } from "react";
import { SpeechRecognition } from "@capacitor-community/speech-recognition";

export const useSpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const checkPermission = async () => {
    const hasPermission = await SpeechRecognition.checkPermissions();
    if (hasPermission.speechRecognition !== "granted") {
      await SpeechRecognition.requestPermissions();
    }
  };

  const startListening = async () => {
    await checkPermission();
    setTranscript("");
    setIsListening(true);

    const options = {
      language: "en-US",
      popup: false,
      partialResults: true,
    };

    SpeechRecognition.start(options);

    SpeechRecognition.addListener("partialResults", (result) => {
      const spokenText = result.matches[0] || "";
      setTranscript(spokenText);
      setIsListening(false);
      SpeechRecognition.stop();
    });
  };

  const stopListening = async () => {
    await SpeechRecognition.stop();
    setIsListening(false);
  };

  return {
    transcript,
    isListening,
    startListening,
    stopListening,
  };
};
