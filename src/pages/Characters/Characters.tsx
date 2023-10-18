import { getAllCharacters } from "@/api/characters/getAllCharacters";
import CardCharacter from "@/components/Card/CardCharacter";
import { useInfiniteQuery } from "@tanstack/react-query";

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
    /* hasNextPage = false,
    fetchNextPage, */
  } = useInfiniteQuery({
    queryKey: [GET_ALL_CHARACTERS_KEY],
    queryFn: getAllCharacters,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  const characters =
    charactersData?.pages?.flatMap((page) => page.results) ?? [];

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex w-full justify-center bg-red-500">
      <h1 className="text-5xl uppercase text-red-600">Characters</h1>

      <CardCharacter
        id={characters[0].id}
        name={characters[0].name}
        image={characters[0].image}
      />
      <CardCharacter
        id={characters[1].id}
        name={characters[1].name}
        image={characters[1].image}
      />
    </div>
  );
};

export default Characters;
