import Loading from "@/components/Loading/Loading";
import Menu from "@/components/Navbar/Navbar";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home/Home"));
const CharactersPage = lazy(() => import("@/pages/Characters/Characters"));
const LocationsPage = lazy(() => import("@/pages/Locations/Locations"));
//const EpisodesPage = lazy(() => import("@/pages/Episodes/Episodes"));

const Router = () => {
  return (
    <BrowserRouter basename="">
      <main className="flex flex-col h-full min-h-screen bg-[#A868C9] pb-10 font-PlaypenSerif font-[400]">
        <Suspense fallback={<Loading color="secondary" size="lg" />}>
          <Menu />
          <div className=" px-10  pt-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" index element={<HomePage />} />
              <Route path="/characters" element={<CharactersPage />} />
              <Route path="/Locations" element={<LocationsPage />} />
            </Routes>
          </div>
        </Suspense>
      </main>
    </BrowserRouter>
  );
};

export default Router;
