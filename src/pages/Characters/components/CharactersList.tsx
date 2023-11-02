import { CharactersResult } from "@/api/characters/interfaces";
import Loading from "@/components/Loading/Loading";
import InfiniteScroll from "react-infinite-scroller";
import CharacterContainer from "./CharacterContainer";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";

type CharactersListProps = {
  hasNextPage: boolean;
  fetchNextPage: () => void;
  characters: CharactersResult[];
};
const CharactersList = ({
  hasNextPage,
  fetchNextPage,
  characters,
}: CharactersListProps) => {
  if (characters.length === 0) return <NotFoundPage name="Character" />;
  return (
    <InfiniteScroll
      pageStart={1}
      hasMore={hasNextPage}
      loader={<Loading size="lg" color="secondary" key={0} />}
      loadMore={() => {
        fetchNextPage();
      }}
    >
      <div className="flex flex-wrap justify-center lg:justify-between gap-3">
        {characters.map((character, index) => {
          return <CharacterContainer key={index} character={character} />;
        })}
      </div>
    </InfiniteScroll>
  );
};

export default CharactersList;
