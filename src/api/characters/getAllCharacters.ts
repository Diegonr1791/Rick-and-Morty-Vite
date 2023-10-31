import axios from "axios";
import { AllCharactersAPI } from "./interfaces";

const RICK_AND_MORTY_API =
  import.meta.env.RICK_AND_MORTY_API || "https://rickandmortyapi.com/api/";
const DEFAULT_CHARACTERS_ERROR_MESSAGE = "Error fetching characters";

export const getAllCharacters = async ({
  pageParam,
}: {
  pageParam: number;
}) => {
  const url = `${RICK_AND_MORTY_API}/character/?page=${pageParam}`;

  /*    Object.keys(filters).forEach((property) => {
      const key = property as keyof any;
      if (filters[key]) {
        url = url.concat(`&${key}=${filters[key]}`);
      }
    });  */

  const response = await axios<AllCharactersAPI>(url);

  if (!response) throw new Error(DEFAULT_CHARACTERS_ERROR_MESSAGE);

  const data = response.data;
  const characters = data.results;
  const hasNextPage = pageParam < data.info.pages;

  return {
    nextPage: hasNextPage ? pageParam + 1 : undefined,
    results: characters,
  };
};
