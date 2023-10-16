import Card from "../Card/Card";
import { Box, Flex } from "@chakra-ui/react";
import { getAllCharacters } from "@/api/home/getAllCharacters";
import { useQuery } from "@tanstack/react-query";

const GET_ALL_CHARACTERS_KEY = "GET_ALL_CHARACTERS_KEY";

const CardContainer = () => {
  const { data: AllCharactestData } = useQuery(
    [GET_ALL_CHARACTERS_KEY],
    getAllCharacters
  );

  console.log("AllCharactestData", AllCharactestData);
  return (
    <Box>
      <Flex gap={10} flexWrap="wrap" p=" 20px 10px 0px 45px">
        {AllCharactestData?.results &&
          AllCharactestData?.results?.map(
            ({ id, name, status, species, gender, origin, image }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  image={image}
                  origin={origin.name}
                />
              );
            }
          )}
      </Flex>
      {/* <Paginate allChar={AllCharactestData?.results} /> */}
    </Box>
  );
};

export default CardContainer;
