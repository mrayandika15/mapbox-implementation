import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { AiOutlineClose } from "react-icons/ai";

const SearchResult = ({
  setActive,
  Active,
  resource,
  setActivePopUp,
  setPopUpInfo,
  setViewPort,
}) => {
  const handleClick = (e, value) => {
    setActivePopUp(true);
    setPopUpInfo(value);

    setViewPort((prevState) => ({
      ...prevState,
      latitude: value?.geom?.coordinates[1],
      longitude: value?.geom?.coordinates[0],
      zoom: 12,
    }));
  };

  return (
    <>
      {Active && (
        <Box
          w="466px"
          h="fit-content"
          bg="white"
          rounded="lg"
          p="10px"
          shadow="lg"
          display={"flex"}
          gap="10px"
          flexDirection={"column"}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            px="5px"
            py="15px"
            borderBottom="1px solid"
            borderColor="gray.100"
          >
            <Text fontSize="lg" fontWeight="semibold" color="black">
              Hasil Pencarian
            </Text>
            <AiOutlineClose
              size="16px"
              onClick={() => setActive(false)}
              cursor="pointer"
            />
          </Flex>
          <Flex
            flexDirection="column"
            h="520px"
            overflowY="scroll"
            scrollBehavior="smooth"
          >
            {resource?.map((data, index) => (
              <Flex
                gap="10px"
                p="10px"
                _hover={{ background: "gray.100" }}
                cursor="pointer"
                key={index}
                onClick={(e) => handleClick(e, data)}
              >
                <Image src=".\assets\images\placeholder.png" w="220px" />
                <Flex flexDirection="column">
                  <Text color="black" fontWeight="semibold" pb="10px">
                    {data?.nama_jembatan}
                  </Text>
                  <Text fontSize="sm">{data?.lebar} km</Text>
                  <Text fontSize="sm">{data?.panjang} km</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Box>
      )}
    </>
  );
};

export default SearchResult;
