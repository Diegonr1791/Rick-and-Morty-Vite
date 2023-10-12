import React from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getCharById } from "../../redux/actions";
import { Box, HStack, Image, VStack } from "@chakra-ui/react";

const Detail = () => {
  const character = useSelector((state) => state.characterDetail);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCharById(id));
  }, [id]);
  return (
    <Box bg="gold" w={"100vw"} h={"100vh"}>
      <HStack p={"50px 10px"} spacing={"100px"}>
        <Box>
          <Image
            src={character.image}
            alt=""
            layout={"fill"}
            borderRadius={1}
            objectFit={"cover"}
            boxShadow="dark-lg"
          />
        </Box>
        <VStack>
          {character.gender === "Female" ? (
            <h2>Her name is {character.name}</h2>
          ) : (
            <h2>His name is {character.name}</h2>
          )}
          <h2>{character.status}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.origin?.name}</h2>
        </VStack>
      </HStack>
    </Box>
  );
};
export default Detail;
