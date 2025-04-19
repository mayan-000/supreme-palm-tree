import { useCallback } from "react";
import { Page } from "../../App";
import Back from "../../assets/back.svg";
import Globe from "../../assets/globe.svg";
import Mic from "../../assets/mic.svg";
import MusicNote from "../../assets/musicNote.svg";
import { useSpeechToText } from "../../hooks/useSpeechToText";

interface Props {
  setPage: (page: Page) => void;
}

const MicPage = ({ setPage }: Props) => {
  const { transcript, isListening, startListening, stopListening } =
    useSpeechToText();

  const handleMicClick = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  return (
    <div className="bg-gray-800 text-white p-4 pt-12 flex flex-col h-screen">
      <div className="flex justify-between">
        <button
          className="p-2 rounded-full bg-gray-700 flex justify-center items-center"
          onClick={() => setPage(Page.HOME)}
        >
          <img src={Back} alt="Back" className="w-6 h-6" />
        </button>
        <div className="p-2 rounded-full bg-gray-700 flex justify-center items-center">
          <img src={Globe} alt="Globe" className="w-6 h-6" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-around items-center">
        <p className="text-lg text-gray-400">
          {!isListening
            ? transcript
              ? transcript
              : "Tap the mic to start listening"
            : "Listening..."}
        </p>
        <button
          className={`p-4 rounded-full bg-gray-700 flex justify-center items-center ${
            isListening ? "animate-pulse" : ""
          }`}
          onClick={handleMicClick}
        >
          <img src={Mic} alt="Mic" className="w-6 h-6" />
        </button>
        <div className="border border-gray-700 rounded-full px-4 py-2 flex justify-center items-center gap-2 w-fit">
          <img src={MusicNote} alt="Music Note" className="w-4 h-4" />
          <p>Search a song</p>
        </div>
      </div>
    </div>
  );
};

export default MicPage;
