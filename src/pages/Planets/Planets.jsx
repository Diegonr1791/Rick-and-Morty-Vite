import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllLocations } from "../../redux/actions";
import { Box, Flex, HStack, Heading } from "@chakra-ui/react";

const Planets = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations);

  useEffect(() => {
    dispatch(getAllLocations());
  }, []);

  return (
    <Flex color={"white"}>
      <HStack>
        <Box>
          {locations?.map((location) => {
            return <Heading>{location.name}</Heading>;
          })}
        </Box>
      </HStack>
    </Flex>
  );
};

export default Planets;
