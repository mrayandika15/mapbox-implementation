import { Flex, Button } from "@chakra-ui/react";
import ZoomController from "../../components/Zoom Controller";

const SideController = ({ setViewPort, defaultViewPort }) => {
  return (
    <Flex
      flexDirection="column"
      position="fixed"
      right="0"
      alignItems="center"
      pr="12px"
    >
      <Flex pt="25px" flexDirection="column" gap="15px">
        <Button bg="#017E7A" color="white" rounded="lg">
          Masuk
        </Button>
        <Flex w="100%" justify="end">
          <ZoomController
            setViewPort={(value) => setViewPort(value)}
            defaultViewPort={defaultViewPort}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideController;
