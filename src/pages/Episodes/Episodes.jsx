import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Card, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { getAllEpisodes } from "../../redux/actions";
import Paginate from "../../components/Paginate/Paginate";

const Episodes = () => {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodes);

  useEffect(() => {
    dispatch(getAllEpisodes());
  }, []);

  return (
    <HStack flexWrap="wrap" pt="10px">
      {episodes?.map((episode, index) => {
        return (
          <Card
            key={index}
            w="200px"
            h="100px"
            justifyContent="center"
            align="center"
          >
            <Heading fontSize="15px" noOfLines={1} pl="2px">
              {" "}
              {episode.name}
            </Heading>
            <Text> {episode.episode}</Text>
          </Card>
        );
      })}
    </HStack>
  );
};

export default Episodes;
