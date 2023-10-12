import { useState } from "react";
import { Box, HStack, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getAllChar, searchByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    if (value) {
      setName(value);
      dispatch(searchByName(value));
    } else {
      setName("");
      dispatch(getAllChar());
    }
  };

  return (
    <HStack>
      <Box>
        <Input
          backgroundColor={"white"}
          border={"none"}
          variant="filled"
          size={"md"}
          type="text"
          color="black"
          placeholder="Search Character..."
          _placeholder={{ color: "inherit" }}
          value={name}
          onChange={handleChange}
        />
      </Box>
    </HStack>
  );
};

export default SearchBar;
