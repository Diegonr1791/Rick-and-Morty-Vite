import { getAllCharacters } from "@/api/characters/getAllCharacters";
import Loading from "@/components/Loading/Loading";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import CharacterContainer from "./components/CharacterContainer";

const GET_ALL_CHARACTERS_KEY = "GET_ALL_CHARACTERS_KEY";

/* type CharacterProps = {
  filters?: any;
  onCharacterClick?: (id: number) => void;
}; */

const Characters = (/* {
  filters,
onCharacterClick = () => {}}:
CharacterProps */) => {
  const {
    data: charactersData,
    isLoading,
    hasNextPage = false,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: [GET_ALL_CHARACTERS_KEY],
    queryFn: getAllCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  const characters =
    charactersData?.pages?.flatMap((page) => page.results) ?? [];

  if (isLoading) return <Loading size="lg" color="secondary" />;

  return (
    <InfiniteScroll
      pageStart={1}
      hasMore={hasNextPage}
      loader={<Loading size="lg" color="secondary" key={0} />}
      loadMore={() => {
        fetchNextPage();
      }}
    >
      <div className="flex w-full flex-wrap gap-3 justify-center">
        {characters.map((character, index) => {
          return <CharacterContainer key={index} character={character} />;
        })}
      </div>
    </InfiniteScroll>
  );
};

export default Characters;
