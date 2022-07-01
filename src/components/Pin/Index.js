import { Button, Image } from "@chakra-ui/react";
import { useState } from "react";

const Pin = ({ active = false }) => {
  const [Active] = useState(active);

  return (
    <Button
      background="transparent"
      border="none"
      cursor="pointer"
      leftIcon={
        Active ? (
          <Image src=".\assets\icons\pins_active.png" />
        ) : (
          <Image src=".\assets\icons\pins.png" />
        )
      }
      _hover={{
        filter: "drop-shadow(0px 4px 12px rgba(4, 133, 119, 0.2))",
      }}
      _active={Active}
    ></Button>
  );
};

export default Pin;
