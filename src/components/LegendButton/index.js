import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";

const LegendButton = () => {
  const [LegendActive, setlegendActive] = useState(false);

  return (
    <Flex flexDirection="column" alignItems="end">
      <Button
        leftIcon={
          LegendActive ? (
            <RiArrowDropDownFill size="25px" color="#017E7A" />
          ) : (
            <RiArrowDropUpFill size="25px" color="#017E7A" />
          )
        }
        color="#017E7A"
        bg="white"
        rounded="lg"
        w="130px"
        borderBottomRadius={LegendActive ? "0" : "lg"}
        mr="15px"
        onClick={() => setlegendActive(!LegendActive)}
      >
        Legenda
      </Button>

      {LegendActive && (
        <Box
          display="flex"
          flexDirection="column"
          bg="white"
          w="280px"
          h="320px"
          rounded="xl"
          p="20px"
        >
          <Flex
            flexDirection="column"
            gap="3px"
            borderBottom="1px solid"
            borderColor="gray.200"
            h="85px"
          >
            <Flex gap="15px" alignItems="center">
              <Image
                w="20px"
                h="5.5px"
                src="./assets/icons/batas_kecamatan.png"
              />
              <Text fontSize="sm">Batas Kecamatan</Text>
            </Flex>
            <Flex gap="15px" alignItems="center">
              <Image
                w="20px"
                h="5.5px"
                src="./assets/icons/batas_kelurahan.png"
              />
              <Text fontSize="sm">Batas Kelurahan / Desa</Text>
            </Flex>
            <Flex gap="15px">
              <Image src="./assets/icons/bridge.png" />
              <Text fontSize="sm">Jembatan</Text>
            </Flex>
          </Flex>

          <Flex flexDirection="column" gap="3px">
            <Text fontSize="xs" color="gray">
              Jenis-Jenis Jalan
            </Text>

            <Flex gap="15px" alignItems="center">
              <Image
                w="20px"
                h="5.5px"
                src="./assets/icons/arteri_primer.png"
              />
              <Text fontSize="sm">Jalan Arteri Primer</Text>
            </Flex>

            <Flex gap="15px" alignItems="center">
              <Image
                w="20px"
                h="5.5px"
                src="./assets/icons/kolektor_primer.png"
              />
              <Text fontSize="sm">Jalan Kolektor Primer 1,2</Text>
            </Flex>

            <Flex gap="15px" alignItems="center">
              <Image
                w="20px"
                h="5.5px"
                src="./assets/icons/kolektor_primer2.png"
              />
              <Text fontSize="sm">Jalan Kolektor Primer 3,4</Text>
            </Flex>

            <Flex gap="15px" alignItems="center">
              <Image w="20px" h="5.5px" src="./assets/icons/lokal_primer.png" />
              <Text fontSize="sm">Jalan Lokal Primer 1,2,3</Text>
            </Flex>

            <Flex gap="15px">
              <Image
                w="20px"
                h="5.5px"
                src="./assets/icons/jalan_sekunder.png"
                mt="10px"
              />
              <Flex flexDirection="column">
                <Text fontSize="sm">Jalan Arteri Sekunder</Text>
                <Text fontSize="sm">Jalan Kolektor Sekunder 1,2,3</Text>
                <Text fontSize="sm">Jalan Lokal Sekunder 1, 2, 3</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default LegendButton;
