import { useState } from "react";
import Homepage from "./pages/homepage";
import SearchPage from "./pages/searchPage";
import MicPage from "./pages/micPage";
import LensPage from "./pages/lensPage";

export enum Page {
  HOME = "home",
  SEARCH = "search",
  MIC = "mic",
  CAMERA = "camera",
}

function App() {
  const [page, setPage] = useState<Page>(Page.HOME);

  return (
    <>
      {page === Page.HOME && <Homepage setPage={setPage} />}
      {page === Page.SEARCH && <SearchPage setPage={setPage} />}
      {page === Page.MIC && <MicPage setPage={setPage} />}
      {page === Page.CAMERA && <LensPage setPage={setPage} />}
    </>
  );
}

export default App;
