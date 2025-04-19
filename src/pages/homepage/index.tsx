import Experiment from "../../assets/experiment.svg";
import ImageSearch from "../../assets/imageSearch.svg";
import Translate from "../../assets/translate.svg";
import School from "../../assets/school.svg";
import MusicNote from "../../assets/musicNote.svg";
import Search from "../../assets/search.svg";
import Mic from "../../assets/mic.svg";
import Camera from "../../assets/camera.svg";
import { Page } from "../../App";

interface Props {
  setPage: (page: Page) => void;
}

const Homepage = ({ setPage }: Props) => {
  return (
    <div className="bg-gray-800 text-white">
      {/* Header */}
      <div className="flex justify-between items-center p-8 pt-12">
        <div>
          <img src={Experiment} alt="Experiment" className="w-8 h-8" />
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-500 flex justify-center items-center">
          <span>A</span>
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-col items-center justify-center w-full">
        <p className="text-5xl pb-4 my-4">Google</p>
        {/* Search bar */}
        <div className="w-full border-b border-gray-700 p-4 pb-8">
          <div className="flex justify-center items-center gap-4 w-full p-4 rounded-full bg-gray-700 text-white mb-2">
            <div
              className="flex items-center gap-2 w-full"
              onClick={(e) => {
                e.stopPropagation();
                setPage(Page.SEARCH);
              }}
            >
              <img src={Search} alt="Search" className="w-6 h-6" />
              <div className="text-xl flex-grow text-gray-400">Search</div>
            </div>
            <button onClick={() => setPage(Page.MIC)}>
              <img src={Mic} alt="Mic" className="w-6 h-6" />
            </button>
            <button onClick={() => setPage(Page.CAMERA)}>
              <img src={Camera} alt="Camera" className="w-6 h-6" />
            </button>
          </div>
          <div className="flex justify-between align-items">
            {[ImageSearch, Translate, School, MusicNote].map((item, index) => (
              <div
                className="p-2 w-22 h-12 rounded-full bg-gray-700 text-white flex justify-center items-center"
                key={index}
              >
                <img className="w-6 h-6" src={item} />
              </div>
            ))}
          </div>
        </div>
        {/* Widgets */}
        <div className="p-4 w-full overflow-auto">
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                className="flex flex-col gap-3 border border-gray-700 rounded-2xl p-2 min-w-34"
                key={item}
              >
                <p className="text-xs">Address</p>
                <div className="flex justify-between">
                  <p className="text-base">26</p>
                  <img src={MusicNote} alt="Music" className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Feed */}
        <div className="flex flex-col">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border-b-4 border-gray-900">
              <img src="src/assets/dummy.jpg" />
              <p className="px-4 py-2 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
