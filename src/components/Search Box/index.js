import { Text, Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBox = ({ value, setValue, handleKeyDown }) => {
  const [activeInput, setActiveInput] = useState(false);

  const [toggleButton, setToggleButton] = useState({
    jalan: false,
    jembatan: false,
    kecamatan: false,
    kelurahan: false,
  });

  const handleJalan = () => {
    setActiveInput(true);
    setToggleButton(() => ({
      jalan: true,
      jembatan: false,
      kecamatan: false,
      kelurahan: false,
    }));
  };

  const handleJembatan = () => {
    setActiveInput(true);
    setToggleButton(() => ({
      jembatan: true,
      jalan: false,
      kecamatan: false,
      kelurahan: false,
    }));
  };

  const handleKecamatan = () => {
    setActiveInput(true);
    setToggleButton(() => ({
      kecamatan: true,
      jalan: false,
      jembatan: false,
      kelurahan: false,
    }));
  };

  const handleKelurahan = () => {
    setActiveInput(true);
    setToggleButton(() => ({
      kelurahan: true,
      jalan: false,
      jembatan: false,
      kecamatan: false,
    }));
  };

  return (
    <Box
      w="466px"
      h="fit-content"
      border="gray"
      bg="white"
      rounded="lg"
      p="10px"
      shadow="lg"
      display={"flex"}
      gap="10px"
      flexDirection={"column"}
    >
      <Text w="100%" h="30px" fontSize="lg" color="black" fontWeight="semibold">
        Cari Berdasarkan Jenis Obyek
      </Text>
      <Flex gap="2">
        <Button
          h="35px"
          colorScheme="teal"
          onClick={handleJalan}
          variant="outline"
          rounded="2xl"
          isActive={toggleButton.jalan ? true : false}
        >
          Jalan
        </Button>

        <Button
          h="35px"
          colorScheme="teal"
          onClick={handleJembatan}
          variant="outline"
          rounded="2xl"
          isActive={toggleButton.jembatan ? true : false}
        >
          Jembatan
        </Button>

        <Button
          h="35px"
          colorScheme="teal"
          onClick={handleKecamatan}
          variant="outline"
          rounded="2xl"
          isActive={toggleButton.kecamatan ? true : false}
        >
          Kecamatan
        </Button>

        <Button
          h="35px"
          colorScheme="teal"
          onClick={handleKelurahan}
          variant="outline"
          rounded="2xl"
          isActive={toggleButton.kelurahan ? true : false}
        >
          Desa/Kelurahan
        </Button>
      </Flex>

      {activeInput && (
        <Flex
          w="100%"
          h="100%"
          py="15px"
          borderTop={"1px solid"}
          borderColor="gray.100"
        >
          <Box
            w="100%"
            h="100%"
            p="10px"
            border="1px solid"
            rounded="xl"
            borderColor="gray.300"
            display="flex"
            alignItems="center"
            gap="10px"
          >
            <Input
              w="100%"
              h="44px"
              variant="unstyled"
              placeholder="Cari Suatu Obyek..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <BsSearch color="gray" size="23px" />
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default SearchBox;
