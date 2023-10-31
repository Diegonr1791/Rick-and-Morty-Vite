import { useDisclosure } from "@nextui-org/react";
import ModalComponent from "../../../components/Modal/Modal";
import CharacterDetails from "@/pages/Characters/CharacterDetails";
import { CharactersResult } from "@/api/characters/interfaces";
import CardCharacter from "@/components/Card/CardCharacter";

export const CharacterContainer = ({
  character,
}: {
  character: CharactersResult;
}) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <>
      <CardCharacter
        id={character.id}
        image={character.image}
        name={character.name}
        onClick={onOpen}
      />
      <ModalComponent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        children={<CharacterDetails id={character.id} />}
        onClose={onClose}
      />
    </>
  );
};

export default CharacterContainer;
