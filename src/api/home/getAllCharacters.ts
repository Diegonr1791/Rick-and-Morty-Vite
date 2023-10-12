import axios from "axios";
import { AllCharactersAPI } from "./interfaces";

const RICK_AND_MORTY_API =
  import.meta.env.RICK_AND_MORTY_API || "https://rickandmortyapi.com/api/";

const getAllCharacters = async () => {
  try {
    const response = await axios<AllCharactersAPI>(
      `${RICK_AND_MORTY_API}/character`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default getAllCharacters;
