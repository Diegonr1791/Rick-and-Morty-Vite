import { getCharacterDetails } from "@/api/characters/getCharacterDetails";

import { useQuery } from "@tanstack/react-query";
import CharacterDetailsContainer from "./components/CharacterDetailsContainer";

const GET_CHARACTER_DETAIL_KEY = "GET_CHARACTER_DETAIL_KEY";

const CharacterDetails = ({ id }: { id: number }) => {
  const { data: characterData } = useQuery({
    queryKey: [GET_CHARACTER_DETAIL_KEY, id],
    queryFn: () => getCharacterDetails(Number(id)),
  });

  if (!characterData) return;
  return (
    <section className=" flex w-full h-full text-white md:place-content-center font-PlaypenSerif font-bold">
      <CharacterDetailsContainer characterDetails={characterData} />
    </section>
  );
};

export default CharacterDetails;
