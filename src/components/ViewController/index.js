import { Flex, Box, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

import { FiLayers } from "react-icons/fi";

const ViewController = ({ setActiveLayer, activeLayer }) => {
  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    setActive(!active);
  };

  const BoxCheck = () => {
    return (
      <Box
        position="absolute"
        inset="0"
        bg="blackAlpha.500"
        rounded="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="full"
        h="full"
      >
        <AiOutlineCheck color="white" size="30px" />
      </Box>
    );
  };

  const handleKelurahan = () => {
    setActiveLayer((prevState) => ({
      ...prevState,
      kelurahan: !activeLayer.kelurahan,
    }));
  };

  const handleKecamatan = () => {
    setActiveLayer((prevState) => ({
      ...prevState,
      kecamatan: !activeLayer.kecamatan,
    }));
  };

  const handleBridge = () => {
    setActiveLayer((prevState) => ({
      ...prevState,
      bridge: !activeLayer.bridge,
    }));
  };

  const handleJalan = () => {
    setActiveLayer((prevState) => ({
      ...prevState,
      jalan: !activeLayer.jalan,
    }));
  };

  return (
    <Flex
      position="fixed"
      bottom="10px"
      w="fit-content"
      h="fit-content"
      left="10px"
    >
      {active && (
        <Flex
          position="fixed"
          left="100px"
          bottom="15px"
          w="fit-content"
          h="fit-content"
        >
          <Box
            w="170px"
            h="250px"
            bg="white"
            rounded="lg"
            p="7px"
            display="flex"
            justifyContent="center"
          >
            <Flex flexDirection="column">
              <Text fontWeight="semibold" py="3px">
                Jenis Peta
              </Text>
              <Flex gap="12px">
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  gap="2px"
                  cursor="pointer"
                  onClick={handleKelurahan}
                >
                  <Box position="relative">
                    <Image
                      src="./assets/images/kelurahan_map.png"
                      rounded="lg"
                    />
                    {activeLayer.kelurahan && <BoxCheck />}
                  </Box>

                  <Text fontSize="xs">Kelurahan</Text>
                </Flex>

                <Flex
                  flexDirection="column"
                  alignItems="center"
                  gap="2px"
                  cursor="pointer"
                  onClick={handleKecamatan}
                >
                  <Box position="relative">
                    <Image
                      src="./assets/images/kecamatan_map.png"
                      rounded="lg"
                    />
                    {activeLayer.kecamatan && <BoxCheck />}
                  </Box>

                  <Text fontSize="xs">Kecamatan</Text>
                </Flex>
              </Flex>
              <Text fontWeight="semibold" py="3px">
                Objek Peta
              </Text>

              <Flex gap="12px">
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  gap="2px"
                  cursor="pointer"
                  onClick={handleBridge}
                >
                  <Box position="relative">
                    <Image
                      src="./assets/images/jembatan_map.png"
                      rounded="lg"
                    />
                    {activeLayer.bridge && <BoxCheck />}
                  </Box>

                  <Text fontSize="xs">Jembatan</Text>
                </Flex>

                <Flex
                  flexDirection="column"
                  alignItems="center"
                  gap="2px"
                  cursor="pointer"
                  onClick={handleJalan}
                >
                  <Box position="relative">
                    <Image src="./assets/images/jalan_map.png" rounded="lg" />
                    {activeLayer.jalan && <BoxCheck />}
                  </Box>

                  <Text fontSize="xs">Jalan</Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      )}

      <Box
        bg="white"
        p="4px"
        rounded="lg"
        position="relative"
        w="fit-content"
        h="fit-content"
        onClick={handleOnClick}
        cursor="pointer"
        shadow="2xl"
      >
        <Image src=".\assets\images\map_controller.png" rounded="lg" />
        <Flex
          position="absolute"
          inset="0"
          w="full"
          h="full"
          rounded="lg"
          alignItems="end"
          justifyContent="center"
          p="10px"
          cursor="pointer"
          onClick={handleOnClick}
          bg="blackAlpha.200"
        >
          <Flex alignItems="center" gap="3px" cursor="pointer">
            <FiLayers color="white" />
            <Text fontSize="sm" color="white">
              Layer
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ViewController;
