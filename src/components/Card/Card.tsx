import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardHeader,
  Image,
  VStack,
  Button,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillSafetyCertificate,
} from "react-icons/ai";
import { FaSkull } from "react-icons/fa";
import { CardProps } from "./interfaces";

const CardGeneric = ({
  id,
  name,
  status,
  species,
  gender,
  image,
  origin,
}: CardProps) => {
  const [isFav] = useState(false);

  const handleClick = () => {
    /*     if (isFav) {
      dispatch(removeFav(id));
      setIsFav(false);
    } else {
      dispatch(addFav(id));
      setIsFav(true);
    } */
  };

  useEffect(() => {}, []);

  return (
    <Box>
      <Card w="200px" borderRadius={1} bg="gold">
        <CardHeader p="10px">
          {isFav === false ? (
            <Button
              onClick={handleClick}
              position="absolute"
              leftIcon={<AiOutlineHeart />}
              boxSize={5}
              bg="transparent"
            ></Button>
          ) : (
            <Button
              onClick={handleClick}
              position="absolute"
              leftIcon={<AiFillHeart />}
              boxSize={5}
              bg="transparent"
            ></Button>
          )}

          <Image
            src={image}
            borderRadius={1}
            objectFit={"cover"}
            boxShadow="dark-lg"
          />
        </CardHeader>

        <VStack color="green">
          <Link to={`/detail/${id}`}>
            <Heading fontSize={25} noOfLines={1}>
              {name}
            </Heading>
            <Heading fontSize={25} noOfLines={1}>
              {origin}
            </Heading>
          </Link>
          <HStack>
            <Text> {status}</Text>

            <Text>
              {status === "Alive" ? <AiFillSafetyCertificate /> : <FaSkull />}
            </Text>
          </HStack>
          <Text noOfLines={1}>A kind of {species}</Text>
          <h3>Says to be {gender}</h3>
        </VStack>
      </Card>
    </Box>
  );
};

export default CardGeneric;
