import { Flex } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "@/components/Header/Header";
import { originalColors } from "@/theme/palette";
import Loading from "@/components/Loading/Loading";

const HomePage = lazy(() => import("@/pages/Home/Home"));
const CharactersPage = lazy(() => import("@/pages/Characters/Characters"));
//const CharacterDetailPage = lazy(() => import("@/pages/Character/Detail"));
//const PlanetsPage = lazy(() => import("@/pages/Planets/Planets"));
//const EpisodesPage = lazy(() => import("@/pages/Episodes/Episodes"));

const Router = () => {
  return (
    <BrowserRouter basename="">
      <Flex
        flexDir="column"
        flex="1"
        minH="100vh"
        bgColor={originalColors.darkgrey}
      >
        <Header />
        <Flex flex="1">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" index element={<HomePage />} />
              <Route path="/characters" element={<CharactersPage />} />
            </Routes>
          </Suspense>
        </Flex>
      </Flex>
    </BrowserRouter>
  );
};

export default Router;
