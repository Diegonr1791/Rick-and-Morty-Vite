import { HStack, Button, Box, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Paginate = ({ allChar }) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  const handleNext = () => {
    if (allChar.info.next !== null) return dispatch(nextPage(allChar.info));
  };
  const handlePrev = () => {
    if (allChar.info.prev !== null) return dispatch(prevPage(allChar.info));
  };

  return (
    <HStack justifyContent={"center"} py={5}>
      <Button
        onClick={handlePrev}
        value="prev"
        id="prev"
        isDisabled={allChar.prev === "null"}
        colorScheme="gray"
        border={"1px solid black"}
        leftIcon={<MdKeyboardArrowLeft size={20} />}
      >
        Prev
      </Button>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="transparent"
        h={10}
        w={10}
        colorScheme="gray"
        border={"1px solid black"}
        borderRadius={7}
        textAlign="center"
      ></Box>
      <Button
        onClick={handleNext}
        value="next"
        id="next "
        isDisabled={allChar.next === "null"}
        rightIcon={<MdKeyboardArrowRight size={20} />}
        colorScheme="gray"
        border={"1px solid black"}
      >
        Next
      </Button>
    </HStack>
  );
};

export default Paginate;
