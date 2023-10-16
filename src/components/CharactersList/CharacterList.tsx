import { Center, Grid, Heading, Spinner, Text } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "@/components/Loading/Loading";
import { getAllCharacters } from "@/api/characters/getAllCharacters";
import CardGeneric from "../Card/Card";

const GET_ALL_CHARACTERS_KEY = "GET_ALL_CHARACTERS_KEY";

type CharacterListProps = {
  filters?: any;
  onCharacterClick?: (id: number) => void;
};

const CharactersList = ({
  filters,
}: //onCharacterClick = () => {},
CharacterListProps) => {
  const {
    data: charactersData,
    isLoading,
    hasNextPage = false,
    fetchNextPage,
  } = useInfiniteQuery([GET_ALL_CHARACTERS_KEY, filters], getAllCharacters, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  const characters =
    charactersData?.pages?.flatMap((page) => page.results) ?? [];

  if (isLoading) return <Loading />;
  if (!characters.length)
    return (
      <Center>
        <Heading color="white">No items found</Heading>
      </Center>
    );
  return (
    <InfiniteScroll
      pageStart={1}
      hasMore={hasNextPage}
      loader={<Spinner key={0} />}
      loadMore={() => {
        fetchNextPage();
      }}
      style={{ textAlign: "center", color: "white" }}
      key={0}
    >
      <Grid
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="center"
        mb={2}
      >
        {characters.map((character, index) => {
          return (
            <CardGeneric
              key={index}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              image={character.image}
              origin={character.origin.name}
            />
          );
        })}
      </Grid>
      {!hasNextPage && (
        <Center w="100%" my={5}>
          <Text>No more results</Text>
        </Center>
      )}
    </InfiniteScroll>
  );
};

export default CharactersList;
