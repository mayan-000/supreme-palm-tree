import Back from "../../assets/back.svg";
import Clock from "../../assets/clock.svg";
import Mic from "../../assets/mic.svg";
import Camera from "../../assets/camera.svg";
import { Page } from "../../App";

interface Props {
  setPage: (page: Page) => void;
}

const SearchPage = ({ setPage }: Props) => {
  return (
    <div className="bg-gray-800 text-white p-4 pt-12 flex flex-col h-screen">
      <div className="flex justify-center items-center gap-4 w-full px-4 py-2 rounded-full bg-gray-700 text-white mb-4">
        <div
          className="flex items-center gap-2 w-full"
          onClick={(e) => {
            e.stopPropagation();
            setPage(Page.HOME);
          }}
        >
          <img src={Back} alt="Back" className="w-4 h-4" />
          <div className="text-lg flex-grow text-gray-400">
            Search or type URL
          </div>
        </div>
        <img src={Mic} alt="Mic" className="w-6 h-6" />
        <img src={Camera} alt="Camera" className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center text-sm text-gray-400">
          <p>Recent searches</p>
          <p>MANAGE HISTORY</p>
        </div>
        {[1, 2, 3, 4].map((item) => (
          <div className="flex items-center gap-4 p-2 my-2 text-white">
            <img src={Clock} alt="Clock" className="w-6 h-6" />
            <p className="text-gray-100">Search term {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
