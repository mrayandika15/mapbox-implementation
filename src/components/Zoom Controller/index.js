import { Button, Flex } from "@chakra-ui/react";

const ZoomController = ({ setViewPort, defaultViewPort }) => {
  const handleZoomIn = () => {
    setViewPort((prevState) => ({
      ...prevState,
      zoom: defaultViewPort.zoom + 1,
    }));
  };
  const handleZoomOut = () => {
    setViewPort((prevState) => ({
      ...prevState,
      zoom: defaultViewPort.zoom - 1,
    }));
  };

  return (
    <Flex
      overflow={"hidden"}
      rounded="xl"
      direction="column"
      w="50px"
      justifyContent="center"
    >
      <Button
        color="#017E7A"
        borderBottomRadius="0"
        fontSize="xl"
        bg="white"
        border="gray.700"
        onClick={handleZoomIn}
      >
        +
      </Button>
      <Button
        borderTopRadius="0"
        color="#017E7A"
        fontSize="xl"
        bg="white"
        border="gray.700"
        onClick={handleZoomOut}
      >
        -
      </Button>
    </Flex>
  );
};

export default ZoomController;
