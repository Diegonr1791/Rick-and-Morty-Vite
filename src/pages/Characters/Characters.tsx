import CharactersList from "@/components/CharactersList/CharacterList";
import { Box } from "@chakra-ui/react";

const Characters = () => {
  return (
    <Box w="100%" mt={4}>
      <CharactersList />;
    </Box>
  );
};

export default Characters;
