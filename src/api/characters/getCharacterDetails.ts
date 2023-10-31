import axios from "axios";
import { CharacterDetailsAPI } from "./interfaces";

const RICK_AND_MORTY_API =
  import.meta.env.RICK_AND_MORTY_API || "https://rickandmortyapi.com/api/";
const DEFAULT_CHARACTERS_ERROR_MESSAGE = "Error fetching character details";

export const getCharacterDetails = async (id: number) => {
  const url = `${RICK_AND_MORTY_API}/character/${id}`;

  const response = await axios<CharacterDetailsAPI>(url);

  if (!response) throw new Error(DEFAULT_CHARACTERS_ERROR_MESSAGE);

  const data = response.data;

  return data;
};
