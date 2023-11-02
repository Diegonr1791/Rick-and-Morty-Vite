import { getAllCharacters } from "@/api/characters/getAllCharacters";
import Loading from "@/components/Loading/Loading";
import { useInfiniteQuery } from "@tanstack/react-query";
import FilterBar from "@/components/FilterBar/FilterBar";
import { useState } from "react";
import { DefaultFilters } from "@/constants/filters";
import CharactersList from "./components/CharactersList";
import SearchInput from "@/components/Search/SearchInput";

const GET_ALL_CHARACTERS_KEY = "GET_ALL_CHARACTERS_KEY";

const Characters = () => {
  const [filters, setFilters] = useState(DefaultFilters);
  const {
    data: charactersData,
    isFetching,
    isLoading,
    hasNextPage = false,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: [GET_ALL_CHARACTERS_KEY, filters],
    queryFn: ({ pageParam }) => getAllCharacters({ pageParam, filters }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    retry: 2,
  });
  const characters =
    charactersData?.pages?.flatMap((page) => page.results) ?? [];

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <section className="flex flex-col">
      <div className="flex w-full justify-end">
        <SearchInput onChange={onFilterChange} />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center pb-4 px-3">
          <FilterBar
            filters={filters}
            setFilters={setFilters}
            isLoading={isFetching}
          />
        </div>
        <div className="flex w-full">
          {!isLoading ? (
            <CharactersList
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
              characters={characters}
            />
          ) : (
            <div className="flex w-full h-full place-content-center">
              <Loading size="lg" color="secondary" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Characters;
