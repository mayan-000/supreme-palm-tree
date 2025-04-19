import { useEffect, useState } from "react";
import {
  CameraPreview,
  CameraPreviewPictureOptions,
} from "@capacitor-community/camera-preview";

export const useCameraPreview = () => {
  const [cameraStarted, setCameraStarted] = useState(false);
  const [imageData, setImageData] = useState<string | null>(null);

  const startCamera = async () => {
    try {
      await CameraPreview.start({
        parent: "cameraPreview",
        className: "camera-preview",
        position: "rear",
        toBack: false,
        width: window.innerWidth,
        height: window.innerHeight - 225,
        x: 0,
        y: 150,
      });
      setCameraStarted(true);
    } catch (error) {
      console.error("Error starting camera", error);
    }
  };

  const stopCamera = async () => {
    try {
      await CameraPreview.stop();
      setCameraStarted(false);
    } catch (error) {
      console.error("Error stopping camera", error);
    }
  };

  const captureImage = async () => {
    try {
      const options: CameraPreviewPictureOptions = {
        quality: 90,
      };
      const result = await CameraPreview.capture(options);
      const base64Image = `data:image/jpeg;base64,${result.value}`;
      setImageData(base64Image);
      return base64Image;
    } catch (error) {
      console.error("Error capturing image", error);
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  return {
    cameraStarted,
    imageData,
    setImageData,
    startCamera,
    stopCamera,
    captureImage,
  };
};
