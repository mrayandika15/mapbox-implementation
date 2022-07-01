import { Flex } from "@chakra-ui/react";
import { LegendButton, ViewController } from "../../components";

const BottomController = () => {
  return (
    <Flex
      w="100%"
      bg="transparent"
      position="fixed"
      zIndex="modal"
      bottom="0"
      justifyContent="space-between"
      px="20px"
      py="10px"
      alignItems="center"
    >
      <div />
      <LegendButton />
    </Flex>
  );
};

export default BottomController;
