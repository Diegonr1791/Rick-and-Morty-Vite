import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home/Home"));
const CharactersPage = lazy(() => import("@/pages/Characters/Characters"));
//const CharacterDetailPage = lazy(() => import("@/pages/Character/Detail"));
//const PlanetsPage = lazy(() => import("@/pages/Planets/Planets"));
//const EpisodesPage = lazy(() => import("@/pages/Episodes/Episodes"));

const Router = () => {
  return (
    <BrowserRouter basename="">
      <div className="flex flex-col h-screen">
        {/* <Suspense fallback={<Loading />}> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" index element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
        </Routes>
        {/* </Suspense> */}
      </div>
    </BrowserRouter>
  );
};

export default Router;
