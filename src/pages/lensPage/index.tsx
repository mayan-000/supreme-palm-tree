import { useCallback, useEffect } from "react";
import Back from "./../../assets/back.svg";
import FlashOff from "./../../assets/flashOff.svg";
import History from "./../../assets/history.svg";
import More from "./../../assets/more.svg";
import Search from "./../../assets/search.svg";
import Cross from "./../../assets/cross.svg";
import { Page } from "../../App";
import { useCameraPreview } from "../../hooks/useCamera";

type Props = {
  setPage: (page: Page) => void;
};

const LensPage = ({ setPage }: Props) => {
  const { imageData, captureImage, startCamera, stopCamera, setImageData } =
    useCameraPreview();

  const handleClick = useCallback(async () => {
    await captureImage();
  }, [captureImage]);

  const handleCrossClick = useCallback(() => {
    setImageData(null);
    startCamera();
  }, [setImageData, startCamera]);

  useEffect(() => {
    if (imageData) {
      stopCamera();
    }
  }, [imageData, stopCamera]);

  return (
    <div className="p-4 pt-12 bg-gray-800 text-white flex flex-col h-screen justify-between items-center relative">
      <div className="flex justify-between items-center w-full z-100">
        <button className="p-2" onClick={() => setPage(Page.HOME)}>
          <img src={Back} alt="Back" className="w-6 h-6" />
        </button>
        <button className="p-2">
          <img src={FlashOff} alt="Flash" className="w-6 h-6" />
        </button>
        <p className="text-lg">Google Lens</p>
        <button className="p-2">
          <img src={History} alt="History" className="w-6 h-6" />
        </button>
        <button className="p-2">
          <img src={More} alt="More" className="w-6 h-6" />
        </button>
      </div>

      <div className="border border-gray-200 rounded-4xl w-40 h-40 absolute z-100 top-1/2 left-1/2 -translate-1/2"></div>

      {imageData && (
        <img
          src={imageData}
          alt="Captured"
          className="absolute top-30 left-0 z-10 rounded-4xl h-[70vh] w-full object-cover"
        />
      )}

      {!imageData && (
        <div
          id="cameraPreview"
          className="absolute top-0 left-0 z-10 rounded-4xl"
        ></div>
      )}

      <button
        className="border-2 border-gray-200 rounded-full mb-6 p-1"
        onClick={handleClick}
      >
        <div className="bg-gray-600 rounded-full p-4 flex justify-center items-center gap-4">
          {imageData ? (
            <img
              src={Cross}
              alt="Cross"
              className="w-6 h-6"
              onClick={handleCrossClick}
            />
          ) : (
            <img src={Search} alt="Search" className="w-6 h-6" />
          )}
        </div>
      </button>
    </div>
  );
};

export default LensPage;
