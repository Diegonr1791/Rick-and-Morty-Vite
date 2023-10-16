import { Divider, Flex, Grid } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import { originalColors } from "@/theme/palette";

const Header = () => {
  return (
    <Grid>
      <Flex flex={1} py={2}>
        <Navbar />
      </Flex>
      <Divider color={originalColors.grey} opacity={0.1} />
    </Grid>
  );
};

export default Header;
