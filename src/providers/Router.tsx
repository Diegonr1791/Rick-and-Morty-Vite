import Loading from "@/components/Loading/Loading";
import Menu from "@/components/Navbar/Navbar";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home/Home"));
const CharactersPage = lazy(() => import("@/pages/Characters/Characters"));
//const CharacterDetailPage = lazy(() => import("@/pages/Character/Detail"));
//const PlanetsPage = lazy(() => import("@/pages/Planets/Planets"));
//const EpisodesPage = lazy(() => import("@/pages/Episodes/Episodes"));

const Router = () => {
  return (
    <BrowserRouter basename="">
      <div
        className="flex flex-col h-screen font-mono bg-no-repeat bg-contain  bg-center"
        style={{
          backgroundImage:
            "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1124f0-dadb-4ef1-a72a-15dce55876b4/db99y1d-9a09ff26-83e6-4010-8be4-d26de28f276b.png/v1/fill/w_1024,h_576,q_80,strp/rickandmorty_by_einyels_db99y1d-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvN2MxMTI0ZjAtZGFkYi00ZWYxLWE3MmEtMTVkY2U1NTg3NmI0XC9kYjk5eTFkLTlhMDlmZjI2LTgzZTYtNDAxMC04YmU0LWQyNmRlMjhmMjc2Yi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.E_S9D3AhbSDIT16f4rxvefeBCeSj_zeed_3jYlHn9dE)",
        }}
      >
        <Suspense fallback={<Loading />}>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" index element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default Router;
