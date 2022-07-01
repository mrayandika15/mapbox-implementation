import { Flex } from "@chakra-ui/react";
import { SearchBox, SearchResult } from "../../components";

import { useState } from "react";
import { searchBridgeByName } from "../../services";

const SearchSection = ({
  setToggleResult,
  ToggleResult,
  setPopUpInfo,
  setActivePopUp,
  setViewPort,
}) => {
  const [value, setValue] = useState("");

  const [resource, setResource] = useState([]);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      const res = await searchBridgeByName(value);

      setResource(res?.search_jembatan);

      setToggleResult(true);
    }
  };

  return (
    <Flex
      position="fixed"
      zIndex="modal"
      top="25px"
      left="15px"
      flexDirection="column"
      gap="10px"
    >
      <SearchBox
        value={value}
        setValue={(value) => setValue(value)}
        handleKeyDown={handleKeyDown}
      />
      <SearchResult
        Active={ToggleResult}
        setActive={setToggleResult}
        resource={resource}
        setPopUpInfo={(value) => setPopUpInfo(value)}
        setActivePopUp={(value) => setActivePopUp(value)}
        setViewPort={(value) => setViewPort(value)}
      />
    </Flex>
  );
};

export default SearchSection;
